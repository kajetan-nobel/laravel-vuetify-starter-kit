<script setup lang="ts">
import DeleteUser from '@/components/DeleteUser.vue'
import HeadingSmall from '@/components/HeadingSmall.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import SettingsLayout from '@/layouts/settings/Layout.vue'
import { type BreadcrumbItem } from '@/types'
import { router, useForm, usePage } from '@inertiajs/vue3'

interface Props {
  mustVerifyEmail: boolean;
  status?: string;
}

defineProps<Props>()

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Profile settings',
    href: '/settings/profile',
  },
]

const page = usePage()
const user = page.props.auth.user

const form = useForm({
  name: user.name,
  email: user.email,
})

const submit = () => {
  form.patch(route('profile.update'), {
    preserveScroll: true,
  })
}
</script>

<template>
  <app-layout :breadcrumbs="breadcrumbs">
    <inertia-head title="Profile settings" />

    <settings-layout>
      <div class="d-flex flex-column ga-4">
        <heading-small title="Profile information" description="Update your name and email address" />

        <form class="d-flex flex-column ga-4" @submit.prevent="submit">
          <VTextField
            id="name"
            v-model="form.name"
            required
            autofocus
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
            autocomplete="email"
            label="Email address"
            :error-messages="form.errors.email"
          />

          <div v-if="mustVerifyEmail && !user.email_verified_at" class="d-flex flex-column ga-2">
            <VAlert
              variant="tonal"
              border
              color="error"
            >
              <div class="d-flex flex-column ga-2 font-weight-medium">
                Your email address is unverified.
                <div>
                  <VBtn
                    text="Click here to resend the verification email."
                    @click.prevent="router.post(route('verification.send'))"
                  />
                </div>
              </div>
            </VAlert>
            <VAlert
              v-if="status === 'verification-link-sent'"
              variant="tonal"
              border
              color="success"
              text="A new verification link has been sent to your email address."
            />
          </div>

          <div class="d-flex align-center ga-4">
            <VBtn
              color="primary"
              type="submit"
              :disabled="form.processing"
              :loading="form.processing"
              text="Save"
            />

            <Transition
              enter-active-class="transition ease-in-out"
              enter-from-class="opacity-0"
              leave-active-class="transition ease-in-out"
              leave-to-class="opacity-0"
            >
              <p v-show="form.recentlySuccessful" class="text-body-2 text-grey-darken-1">
                Saved.
              </p>
            </Transition>
          </div>
        </form>

        <delete-user />
      </div>
    </settings-layout>
  </app-layout>
</template>
