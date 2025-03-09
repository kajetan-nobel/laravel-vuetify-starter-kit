<script setup lang="ts">
import DeleteUser from '@/components/DeleteUser.vue';
import HeadingSmall from '@/components/HeadingSmall.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { type BreadcrumbItem, type SharedData, type User } from '@/types';
import { TransitionRoot } from '@headlessui/vue';
import { Head, router, useForm, usePage } from '@inertiajs/vue3';

interface Props {
    mustVerifyEmail: boolean;
    status?: string;
}

defineProps<Props>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile settings',
        href: '/settings/profile',
    },
];

const page = usePage<SharedData>();
const user = page.props.auth.user as User;

const form = useForm({
    name: user.name,
    email: user.email,
});

const submit = () => {
    form.patch(route('profile.update'), {
        preserveScroll: true,
    });
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <Head title="Profile settings" />

        <SettingsLayout>
            <div class="d-flex flex-column ga-4">
                <HeadingSmall title="Profile information" description="Update your name and email address" />

                <form @submit.prevent="submit" class="d-flex flex-column ga-4">
                    <VTextField
                        id="name"
                        required
                        autofocus
                        autocomplete="name"
                        v-model="form.name"
                        placeholder="Full name"
                        label="Name"
                        :error-messages="form.errors.name"
                    />

                    <VTextField
                        id="email"
                        type="email"
                        required
                        autocomplete="email"
                        v-model="form.email"
                        label="Email address"
                        :error-messages="form.errors.email"
                    />

                    <div v-if="mustVerifyEmail && !user.email_verified_at" class="d-flex flex-column ga-2">
                        <VAlert variant="tonal" border color="error">
                            <div class="d-flex flex-column ga-2 font-weight-medium">
                                Your email address is unverified.
                                <div>
                                    <VBtn
                                        text="Click here to resend the verification email."
                                        @click.prevent="router.post(route('verification.send'))"
                                    />
                                </div>
                            </div>
                        </VAlert>
                        <VAlert
                            variant="tonal"
                            border
                            color="success"
                            v-if="status === 'verification-link-sent'"
                            text="A new verification link has been sent to your email address."
                        />
                    </div>

                    <div class="d-flex align-center ga-4">
                        <VBtn color="primary" type="submit" :disabled="form.processing" :loading="form.processing" text="Save" />

                        <TransitionRoot
                            :show="form.recentlySuccessful"
                            enter="transition ease-in-out"
                            enter-from="opacity-0"
                            leave="transition ease-in-out"
                            leave-to="opacity-0"
                        >
                            <p class="text-body-2 text-grey-darken-1">Saved.</p>
                        </TransitionRoot>
                    </div>
                </form>

                <DeleteUser />
            </div>
        </SettingsLayout>
    </AppLayout>
</template>
