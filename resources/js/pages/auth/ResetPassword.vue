<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import { useForm } from '@inertiajs/vue3'

interface Props {
  token: string;
  email: string;
}

const props = defineProps<Props>()

const form = useForm({
  token: props.token,
  email: props.email,
  password: '',
  password_confirmation: '',
})

const submit = () => {
  form.post(route('password.store'), {
    onFinish: () => {
      form.reset('password', 'password_confirmation')
    },
  })
}
</script>

<template>
  <auth-layout title="Reset password" description="Please enter your new password below">
    <inertia-head title="Reset password" />

    <form class="d-flex flex-column ga-2" @submit.prevent="submit">
      <VTextField
        id="email"
        v-model="form.email"
        type="email"
        required
        autofocus
        autocomplete="email"
        label="Email address"
        :error-messages="form.errors.email"
        readonly
      />
      <VTextField
        id="password"
        v-model="form.password"
        type="password"
        required
        :tabindex="1"
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
        :tabindex="2"
        autocomplete="new-password"
        placeholder="Confirm password"
        label="Confirm password"
        :error-messages="form.errors.password_confirmation"
      />
      <VBtn
        color="primary"
        type="submit"
        :tabindex="2"
        :disabled="form.processing"
        :loading="form.processing"
        text="Reset password"
      />
    </form>
  </auth-layout>
</template>
