<script setup lang="ts">
import { type InertiaLinkProps } from '@inertiajs/vue3'

interface Props {
  href: string;
  tabindex?: number;
  method?: InertiaLinkProps['method'];
  as?: string;
}

defineProps<Props>()
</script>

<template>
  <inertia-link
    :href="href"
    :tabindex="tabindex"
    :method="method"
    :as="as"
    class="on-background"
  >
    <slot />
  </inertia-link>
</template>
