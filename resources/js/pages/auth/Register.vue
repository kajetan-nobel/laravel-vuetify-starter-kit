<script setup lang="ts">
import TextLink from '@/components/TextLink.vue';
import AuthBase from '@/layouts/AuthLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <AuthBase title="Create an account" description="Enter your details below to create your account">
        <Head title="Register" />

        <form @submit.prevent="submit" class="d-flex flex-column ga-6">
            <div class="d-flex flex-column ga-2">
                <VTextField
                    id="email"
                    type="email"
                    required
                    autofocus
                    :tabindex="1"
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
                    :tabindex="2"
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
                    :tabindex="3"
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
                    :tabindex="4"
                    autocomplete="new-password"
                    v-model="form.password_confirmation"
                    placeholder="Confirm password"
                    label="Confirm password"
                    :error-messages="form.errors.password_confirmation"
                />

                <VBtn color="primary" type="submit" :tabindex="5" :disabled="form.processing" :loading="form.processing" text="Create account" />
            </div>

            <div class="text-center text-grey-darken-1">
                Already have an account?
                <TextLink :href="route('login')" :tabindex="6">Log in</TextLink>
            </div>
        </form>
    </AuthBase>
</template>
