<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
}

defineProps<Props>()
</script>

<template>
  <header>
    <h3 class="text-body-1 font-weight-medium" v-text="title" />
    <p
      v-if="description"
      class="text-sm text-body-2 text-grey-darken-1"
      v-text="description"
    />
  </header>
</template>
