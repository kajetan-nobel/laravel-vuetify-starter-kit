<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue'

defineProps<{
  title?: string;
  description?: string;
}>()
</script>

<template>
  <VApp>
    <VMain>
      <VContainer
        fluid
        class="d-flex flex-column ga-6 align-center justify-center pa-6 pa-md-10 fill-height"
        max-width="500"
      >
        <div class="d-flex flex-column items-center ga-4">
          <inertia-link :href="route('home')" class="d-flex justify-center text-h5">
            <app-logo-icon class="on-surface" />
            <span class="d-sr-only">{{ title }}</span>
          </inertia-link>
          <div class="text-center my-2">
            <h1 class="text-h6 font-weight-bold">
              {{ title }}
            </h1>
            <p class="text-center text-grey-darken-1">
              {{ description }}
            </p>
          </div>
        </div>
        <VCard
          variant="flat"
          color="transparent"
          width="100%"
        >
          <slot />
        </VCard>
      </VContainer>
    </VMain>
  </VApp>
</template>
