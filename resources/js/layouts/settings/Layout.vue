<script setup lang="ts">
import Heading from '@/components/Heading.vue'
</script>

<template>
  <heading title="Settings" description="Manage your profile and account settings" />

  <div class="d-flex ga-6">
    <VList
      nav
      :max-width="180"
      class="flex-grow-1 pa-0"
      density="compact"
      bg-color="transparent"
      :items="[
        {
          title: 'Profile',
          props: {
            to: route('profile.edit'),
          },
        },
        {
          title: 'Password',
          props: {
            to: route('password.edit'),
          },
        },
        {
          title: 'Appearance',
          props: {
            to: route('appearance'),
          },
        },
      ]"
    />
    <VCard
      class="flex-grow-1"
      color="transparent"
      :max-width="700"
      flat
    >
      <slot />
    </VCard>
  </div>
</template>
