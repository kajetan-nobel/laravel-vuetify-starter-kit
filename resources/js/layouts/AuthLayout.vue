<script setup lang="ts">
import AuthLayout from '@/layouts/auth/AuthSimpleLayout.vue'

defineProps<{
  title?: string;
  description?: string;
}>()
</script>

<template>
  <auth-layout :title="title" :description="description">
    <slot />
  </auth-layout>
</template>
