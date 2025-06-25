<script setup lang="ts">
import TextLink from '@/components/TextLink.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { useForm } from '@inertiajs/vue3'

defineProps<{
  status?: string;
}>()

const form = useForm({})

const submit = () => {
  form.post(route('verification.send'))
}
</script>

<template>
  <auth-layout title="Verify email" description="Please verify your email address by clicking on the link we just emailed to you.">
    <inertia-head title="Email verification" />

    <div v-if="status === 'verification-link-sent'" class="mb-4 text-center text-sm font-medium text-green-600">
      A new verification link has been sent to the email address you provided during registration.
    </div>

    <form class="space-y-6 text-center" @submit.prevent="submit">
      <VBtn :disabled="form.processing" :loading="form.processing">
        Resend verification email
      </VBtn>

      <text-link
        :href="route('logout')"
        method="post"
        as="button"
        class="mx-auto block text-sm"
      >
        Log out
      </text-link>
    </form>
  </auth-layout>
</template>
