<script setup lang="ts">
import { computed } from 'vue'

const patternId = computed(() => `pattern-${Math.random().toString(36).substring(2, 9)}`)
</script>

<template>
  <svg
    fill="none"
    stroke="currentColor"
    class="text-grey-darken-3 border rounded-lg"
  >
    <defs>
      <pattern
        :id="patternId"
        x="0"
        y="0"
        width="8"
        height="8"
        patternUnits="userSpaceOnUse"
      >
        <path d="M-1 5L5 -1M3 9L8.5 3.5" stroke-width="0.5" />
      </pattern>
    </defs>
    <rect
      stroke="none"
      :fill="`url(#${patternId})`"
      width="100%"
      height="100%"
    />
  </svg>
</template>
