<script setup lang="ts">
import { useAppearance } from '@/composables/useAppearance';
import { ref } from 'vue';

const { appearance, updateAppearance } = useAppearance();

const tabs = [
    { value: 'light', icon: 'mdi-weather-sunny', label: 'Light' },
    { value: 'dark', icon: 'mdi-weather-night', label: 'Dark' },
    { value: 'system', icon: 'mdi-monitor', label: 'System' },
] as const;

const activeTab = ref(appearance);
</script>

<template>
    <VTabs v-model="activeTab" color="primary">
        <VTab
            v-for="{ value, icon, label } in tabs"
            :key="value"
            @click="updateAppearance(value)"
            :prepend-icon="icon"
            :text="label"
            :value="value"
        />
    </VTabs>
</template>
