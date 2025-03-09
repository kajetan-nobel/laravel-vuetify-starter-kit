<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import { useAppearance } from '@/composables/useAppearance';
import { Link } from '@inertiajs/vue3';

const { isDark, isLight } = useAppearance();

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <VApp>
        <VMain
            :class="{
                'bg-grey-darken-4': isDark,
                'bg-grey-lighten-4': isLight,
            }"
        >
            <VContainer fluid class="d-flex flex-column ga-6 align-center justify-center pa-6 pa-md-10 fill-height" max-width="540">
                <div class="d-flex flex-column items-center ga-4">
                    <Link :href="route('home')" class="d-flex justify-center text-h5">
                        <AppLogoIcon class="on-surface" />
                        <span class="d-sr-only">{{ title }}</span>
                    </Link>
                </div>
                <VCard width="100%" class="pa-10 rounded-lg elevation-1" border>
                    <div class="text-center mb-8">
                        <h1 class="text-h6 font-weight-bold">{{ title }}</h1>
                        <p class="text-center text-grey-darken-1">{{ description }}</p>
                    </div>
                    <slot />
                </VCard>
            </VContainer>
        </VMain>
    </VApp>
</template>
