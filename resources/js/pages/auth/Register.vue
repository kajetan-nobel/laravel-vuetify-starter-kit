<script setup lang="ts">
import TextLink from '@/components/TextLink.vue'
import AuthBase from '@/layouts/AuthLayout.vue'
import { useForm } from '@inertiajs/vue3'

const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const submit = () => {
  form.post(route('register'), {
    onFinish: () => form.reset('password', 'password_confirmation'),
  })
}
</script>

<template>
  <auth-base title="Create an account" description="Enter your details below to create your account">
    <inertia-head title="Register" />

    <form class="d-flex flex-column ga-6" @submit.prevent="submit">
      <div class="d-flex flex-column ga-4">
        <VTextField
          id="name"
          v-model="form.name"
          required
          autofocus
          :tabindex="1"
          autocomplete="name"
          placeholder="Full name"
          label="Name"
          :error-messages="form.errors.name"
        />
        <VTextField
          id="email"
          v-model="form.email"
          type="email"
          required
          :tabindex="2"
          autocomplete="email"
          placeholder="email@example.com"
          label="Email address"
          :error-messages="form.errors.email"
        />
        <VTextField
          id="password"
          v-model="form.password"
          type="password"
          required
          :tabindex="3"
          autocomplete="new-password"
          placeholder="Password"
          label="Password"
          :error-messages="form.errors.password"
        />
        <VTextField
          id="password_confirmation"
          v-model="form.password_confirmation"
          type="password"
          required
          :tabindex="4"
          autocomplete="new-password"
          placeholder="Confirm password"
          label="Confirm password"
          :error-messages="form.errors.password_confirmation"
        />

        <VBtn
          color="primary"
          type="submit"
          :tabindex="5"
          :disabled="form.processing"
          :loading="form.processing"
          text="Create account"
        />
      </div>

      <div class="text-center text-grey-darken-1">
        Already have an account?
        <text-link :href="route('login')" :tabindex="6">
          Log in
        </text-link>
      </div>
    </form>
  </auth-base>
</template>
