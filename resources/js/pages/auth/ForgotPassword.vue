<script setup lang="ts">
import TextLink from '@/components/TextLink.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

defineProps<{
    status?: string;
}>();

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <AuthLayout title="Forgot password" description="Enter your email to receive a password reset link">
        <Head title="Forgot password" />

        <form @submit.prevent="submit" class="d-flex flex-column ga-6">
            <div v-if="status" class="text-center font-weight-medium text-green">
                {{ status }}
            </div>
            <div class="d-flex flex-column ga-4">
                <VTextField
                    id="email"
                    type="email"
                    required
                    autofocus
                    :tabindex="1"
                    autocomplete="email"
                    v-model="form.email"
                    placeholder="email@example.com"
                    label="Email address"
                    :error-messages="form.errors.email"
                />
                <VBtn
                    color="primary"
                    type="submit"
                    :tabindex="2"
                    :disabled="form.processing"
                    :loading="form.processing"
                    text="Email password reset link"
                />
            </div>
            <div class="text-center text-grey-darken-1">
                Or, return to
                <TextLink :href="route('login')">log in</TextLink>
            </div>
        </form>
    </AuthLayout>
</template>
