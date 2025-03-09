<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

interface Props {
    token: string;
    email: string;
}

const props = defineProps<Props>();

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.store'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
};
</script>

<template>
    <AuthLayout title="Reset password" description="Please enter your new password below">
        <Head title="Reset password" />

        <form @submit.prevent="submit" class="d-flex flex-column ga-2">
            <VTextField
                id="email"
                type="email"
                required
                autofocus
                autocomplete="email"
                v-model="form.email"
                label="Email address"
                :error-messages="form.errors.email"
                readonly
            />
            <VTextField
                id="password"
                type="password"
                required
                :tabindex="1"
                autocomplete="new-password"
                v-model="form.password"
                placeholder="Password"
                label="Password"
                :error-messages="form.errors.password"
            />
            <VTextField
                id="password_confirmation"
                type="password"
                required
                :tabindex="2"
                autocomplete="new-password"
                v-model="form.password_confirmation"
                placeholder="Confirm password"
                label="Confirm password"
                :error-messages="form.errors.password_confirmation"
            />
            <VBtn color="primary" type="submit" :tabindex="2" :disabled="form.processing" :loading="form.processing" text="Reset password" />
        </form>
    </AuthLayout>
</template>
