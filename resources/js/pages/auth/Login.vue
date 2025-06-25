<script setup lang="ts">
import TextLink from '@/components/TextLink.vue'
import AuthBase from '@/layouts/AuthLayout.vue'
import { useForm } from '@inertiajs/vue3'

defineProps<{
  status?: string;
  canResetPassword: boolean;
}>()

const form = useForm({
  email: '',
  password: '',
  remember: false,
})

const submit = () => {
  form.post(route('login'), {
    onFinish: () => form.reset('password'),
  })
}
</script>

<template>
  <auth-base title="Log in to your account" description="Enter your email and password below to log in">
    <inertia-head title="Log in" />

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
        <VTextField
          id="password"
          v-model="form.password"
          type="password"
          required
          :tabindex="2"
          autocomplete="current-password"
          placeholder="Password"
          label="Password"
          :error-messages="form.errors.password"
        />
        <div class="d-flex align-center flex-wrap ga-2">
          <VCheckbox
            id="remember"
            v-model="form.remember"
            :tabindex="3"
            label="Remember me"
            hide-details
          />
          <div class="text-right flex-grow-1">
            <text-link
              v-if="canResetPassword"
              :href="route('password.request')"
              :tabindex="5"
            >
              Forgot password?
            </text-link>
          </div>
        </div>
        <VBtn
          color="primary"
          type="submit"
          :tabindex="4"
          :disabled="form.processing"
          :loading="form.processing"
          text="Log in"
        />
      </div>

      <div class="text-center text-grey-darken-1">
        Don't have an account?
        <text-link :href="route('register')" :tabindex="6">
          Sign up
        </text-link>
      </div>
    </form>
  </auth-base>
</template>
