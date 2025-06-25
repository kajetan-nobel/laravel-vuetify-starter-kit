<script setup lang="ts">
import AppearanceTabs from '@/components/AppearanceTabs.vue'
import HeadingSmall from '@/components/HeadingSmall.vue'
import { type BreadcrumbItem } from '@/types'

import AppLayout from '@/layouts/AppLayout.vue'
import SettingsLayout from '@/layouts/settings/Layout.vue'

const breadcrumbItems: BreadcrumbItem[] = [
  {
    title: 'Appearance settings',
    href: '/settings/appearance',
  },
]
</script>

<template>
  <app-layout :breadcrumbs="breadcrumbItems">
    <inertia-head title="Appearance settings" />

    <settings-layout>
      <div class="d-flex flex-column ga-4">
        <heading-small title="Appearance settings" description="Update your account's appearance settings" />
        <appearance-tabs />
      </div>
    </settings-layout>
  </app-layout>
</template>
