<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/settings/Layout.vue';
import { Head, useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

import HeadingSmall from '@/components/HeadingSmall.vue';
import { type BreadcrumbItem } from '@/types';

const breadcrumbItems: BreadcrumbItem[] = [
    {
        title: 'Password settings',
        href: '/settings/password',
    },
];

const passwordInput = ref<HTMLInputElement | null>(null);
const currentPasswordInput = ref<HTMLInputElement | null>(null);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: (errors: any) => {
            if (errors.password) {
                form.reset('password', 'password_confirmation');
                if (passwordInput.value instanceof HTMLInputElement) {
                    passwordInput.value.focus();
                }
            }

            if (errors.current_password) {
                form.reset('current_password');
                if (currentPasswordInput.value instanceof HTMLInputElement) {
                    currentPasswordInput.value.focus();
                }
            }
        },
    });
};
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbItems">
        <Head title="Password settings" />

        <SettingsLayout>
            <div class="d-flex flex-column ga-4">
                <HeadingSmall title="Update password" description="Ensure your account is using a long, random password to stay secure" />

                <form @submit.prevent="updatePassword" class="d-flex flex-column ga-4">
                    <VTextField
                        id="currentPassword"
                        type="password"
                        ref="currentPasswordInput"
                        autocomplete="current-password"
                        placeholder="Current password"
                        v-model="form.current_password"
                        label="Current password"
                        :error-messages="form.errors.current_password"
                    />

                    <VTextField
                        id="password"
                        type="password"
                        ref="passwordInput"
                        autocomplete="new-password"
                        placeholder="New password"
                        v-model="form.password"
                        label="Password"
                        :error-messages="form.errors.password"
                    />

                    <VTextField
                        id="passwordConfirmation"
                        type="password"
                        autocomplete="new-password"
                        placeholder="Confirm password"
                        v-model="form.password_confirmation"
                        label="Confirm password"
                        :error-messages="form.errors.password_confirmation"
                    />

                    <div class="d-flex align-center ga-4">
                        <VBtn color="primary" type="submit" :disabled="form.processing" :loading="form.processing" text="Save" />

                        <Transition
                            enter-active-class="transition ease-in-out"
                            enter-from-class="opacity-0"
                            leave-active-class="transition ease-in-out"
                            leave-to-class="opacity-0"
                        >
                            <p class="text-body-2 text-grey-darken-1">Saved.</p>
                        </TransitionRoot>
                    </div>
                </form>
            </div>
        </SettingsLayout>
    </AppLayout>
</template>
