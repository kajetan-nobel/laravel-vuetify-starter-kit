<script setup lang="ts">
import TextLink from '@/components/TextLink.vue';
import AuthBase from '@/layouts/AuthLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

defineProps<{
    status?: string;
    canResetPassword: boolean;
}>();

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <AuthBase title="Log in to your account" description="Enter your email and password below to log in">
        <Head title="Log in" />

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
                <VTextField
                    id="password"
                    type="password"
                    required
                    :tabindex="2"
                    autocomplete="current-password"
                    v-model="form.password"
                    placeholder="Password"
                    label="Password"
                    :error-messages="form.errors.password"
                />
                <div class="d-flex align-center flex-wrap ga-2">
                    <VCheckbox id="remember" v-model="form.remember" :tabindex="3" label="Remember me" hide-details />
                    <div class="text-right flex-grow-1">
                        <TextLink v-if="canResetPassword" :href="route('password.request')" :tabindex="5">Forgot password?</TextLink>
                    </div>
                </div>
                <VBtn color="primary" type="submit" :tabindex="4" :disabled="form.processing" :loading="form.processing" text="Log in" />
            </div>

            <div class="text-center text-grey-darken-1">
                Don't have an account?
                <TextLink :href="route('register')" :tabindex="6">Sign up</TextLink>
            </div>
        </form>
    </AuthBase>
</template>
