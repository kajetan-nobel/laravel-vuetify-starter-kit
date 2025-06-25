<script setup lang="ts">
import PlaceholderPattern from '@/components/PlaceholderPattern.vue'
import AppLayout from '@/layouts/AppLayout.vue'
import { type BreadcrumbItem } from '@/types'

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
]
</script>

<template>
  <inertia-head title="Dashboard" />

  <app-layout :breadcrumbs="breadcrumbs">
    <div class="d-flex flex-column ga-4 h-100">
      <div class="d-flex flex-wrap ga-4">
        <placeholder-pattern class="flex-grow-1" />
        <placeholder-pattern class="flex-grow-1" />
        <placeholder-pattern class="flex-grow-1" />
      </div>

      <placeholder-pattern class="flex-grow-1" />
    </div>
  </app-layout>
</template>
