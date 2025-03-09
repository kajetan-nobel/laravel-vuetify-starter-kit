<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm({
    password: '',
});

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <AuthLayout title="Confirm your password" description="This is a secure area of the application. Please confirm your password before continuing.">
        <Head title="Confirm password" />

        <form @submit.prevent="submit" class="d-flex flex-column ga-2">
            <VTextField
                id="password"
                type="password"
                required
                :tabindex="1"
                autocomplete="current-password"
                v-model="form.password"
                label="Password"
                :error-messages="form.errors.password"
            />
            <VBtn color="primary" type="submit" :tabindex="2" :disabled="form.processing" :loading="form.processing" text="Confirm Password" />
        </form>
    </AuthLayout>
</template>
