<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import SettingsLayout from '@/layouts/settings/Layout.vue'
import { useForm } from '@inertiajs/vue3'
import { ref } from 'vue'

import HeadingSmall from '@/components/HeadingSmall.vue'
import { type BreadcrumbItem } from '@/types'

const breadcrumbItems: BreadcrumbItem[] = [
  {
    title: 'Password settings',
    href: '/settings/password',
  },
]

const passwordInput = ref<HTMLInputElement | null>(null)
const currentPasswordInput = ref<HTMLInputElement | null>(null)

const form = useForm({
  current_password: '',
  password: '',
  password_confirmation: '',
})

const updatePassword = () => {
  form.put(route('password.update'), {
    preserveScroll: true,
    onSuccess: () => form.reset(),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (errors: any) => {
      if (errors.password) {
        form.reset('password', 'password_confirmation')
        if (passwordInput.value instanceof HTMLInputElement) {
          passwordInput.value.focus()
        }
      }

      if (errors.current_password) {
        form.reset('current_password')
        if (currentPasswordInput.value instanceof HTMLInputElement) {
          currentPasswordInput.value.focus()
        }
      }
    },
  })
}
</script>

<template>
  <app-layout :breadcrumbs="breadcrumbItems">
    <inertia-head title="Password settings" />

    <settings-layout>
      <div class="d-flex flex-column ga-4">
        <heading-small title="Update password" description="Ensure your account is using a long, random password to stay secure" />

        <form class="d-flex flex-column ga-4" @submit.prevent="updatePassword">
          <VTextField
            id="currentPassword"
            ref="currentPasswordInput"
            v-model="form.current_password"
            type="password"
            autocomplete="current-password"
            placeholder="Current password"
            label="Current password"
            :error-messages="form.errors.current_password"
          />

          <VTextField
            id="password"
            ref="passwordInput"
            v-model="form.password"
            type="password"
            autocomplete="new-password"
            placeholder="New password"
            label="Password"
            :error-messages="form.errors.password"
          />

          <VTextField
            id="passwordConfirmation"
            v-model="form.password_confirmation"
            type="password"
            autocomplete="new-password"
            placeholder="Confirm password"
            label="Confirm password"
            :error-messages="form.errors.password_confirmation"
          />

          <div class="d-flex align-center ga-4">
            <VBtn
              color="primary"
              type="submit"
              :disabled="form.processing"
              :loading="form.processing"
              text="Save"
            />

            <transition
              enter-active-class="transition ease-in-out"
              enter-from-class="opacity-0"
              leave-active-class="transition ease-in-out"
              leave-to-class="opacity-0"
            >
              <p v-show="form.recentlySuccessful" class="text-body-2 text-grey-darken-1">
                Saved.
              </p>
            </transition>
          </div>
        </form>
      </div>
    </settings-layout>
  </app-layout>
</template>
