<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue'
</script>

<template>
  <div class="d-flex align-center ga-4">
    <div class="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
      <app-logo-icon class="size-5 fill-current" />
    </div>
    <span class="text-truncate font-weight-bold text-body-2">{{ $page.props.name }}</span>
  </div>
</template>
