<script setup lang="ts">
import type { BreadcrumbItemType } from '@/types';

defineProps<{
    breadcrumbs?: BreadcrumbItemType[];
}>();
</script>

<template>
    <v-toolbar
        class="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/70 px-6 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 md:px-4"
    >
        <div class="flex items-center gap-2">
            <v-btn icon>
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <template v-if="breadcrumbs.length > 0">
                <v-breadcrumbs>
                    <v-breadcrumbs-item v-for="(breadcrumb, index) in breadcrumbs" :key="index" :to="breadcrumb.href">
                        {{ breadcrumb.title }}
                    </v-breadcrumbs-item>
                </v-breadcrumbs>
            </template>
        </div>
    </v-toolbar>
</template>
