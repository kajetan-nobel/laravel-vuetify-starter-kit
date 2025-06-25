<script setup lang="ts">
import TextLink from '@/components/TextLink.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { useForm } from '@inertiajs/vue3'

defineProps<{
  status?: string;
}>()

const form = useForm({
  email: '',
})

const submit = () => {
  form.post(route('password.email'))
}
</script>

<template>
  <auth-layout title="Forgot password" description="Enter your email to receive a password reset link">
    <inertia-head title="Forgot password" />

    <form class="d-flex flex-column ga-6" @submit.prevent="submit">
      <div v-if="status" class="text-center font-weight-medium text-green">
        {{ status }}
      </div>
      <div class="d-flex flex-column ga-4">
        <VTextField
          id="email"
          v-model="form.email"
          type="email"
          required
          autofocus
          :tabindex="1"
          autocomplete="email"
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
        <text-link :href="route('login')">
          log in
        </text-link>
      </div>
    </form>
  </auth-layout>
</template>
