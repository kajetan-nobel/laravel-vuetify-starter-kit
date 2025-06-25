<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue'
import { usePage } from '@inertiajs/vue3'

const page = usePage()
const quote = page.props.quote

defineProps<{
  title?: string;
  description?: string;
}>()
</script>

<template>
  <VApp>
    <VMain>
      <VRow class="fill-height" no-gutters>
        <VCol
          cols="12"
          md="6"
          class="bg-grey-darken-4 fill-height d-none d-md-flex flex-column pa-8"
        >
          <inertia-link :href="route('home')">
            <app-logo class="text-white" />
          </inertia-link>
          <VSpacer />

          <blockquote v-if="quote" class="space-y-2">
            <p class="text-lg">
              &ldquo;{{ quote.message }}&rdquo;
            </p>
            <footer class="text-sm text-neutral-300">
              {{ quote.author }}
            </footer>
          </blockquote>
        </VCol>
        <VCol
          cols="12"
          md="6"
          class="fill-height d-flex align-center justify-center"
        >
          <VCard
            width="100%"
            class="pa-10 rounded-lg"
            max-width="500"
          >
            <div class="text-center mb-8">
              <h1 class="text-h6 font-weight-bold">
                {{ title }}
              </h1>
              <p class="text-center text-grey-darken-1">
                {{ description }}
              </p>
            </div>
            <slot />
          </VCard>
        </VCol>
      </VRow>
    </VMain>
  </VApp>
</template>
