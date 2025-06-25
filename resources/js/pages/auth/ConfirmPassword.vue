<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
import { useForm } from '@inertiajs/vue3'

const form = useForm({
  password: '',
})

const submit = () => {
  form.post(route('password.confirm'), {
    onFinish: () => {
      form.reset()
    },
  })
}
</script>

<template>
  <auth-layout title="Confirm your password" description="This is a secure area of the application. Please confirm your password before continuing.">
    <inertia-head title="Confirm password" />

    <form class="d-flex flex-column ga-2" @submit.prevent="submit">
      <VTextField
        id="password"
        v-model="form.password"
        type="password"
        required
        :tabindex="1"
        autocomplete="current-password"
        label="Password"
        :error-messages="form.errors.password"
      />
      <VBtn
        color="primary"
        type="submit"
        :tabindex="2"
        :disabled="form.processing"
        :loading="form.processing"
        text="Confirm Password"
      />
    </form>
  </auth-layout>
</template>
