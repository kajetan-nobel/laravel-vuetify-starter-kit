<script setup lang="ts">
import PlaceholderPattern from '@/components/PlaceholderPattern.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="d-flex flex-column ga-4 h-100">
            <div class="d-flex flex-wrap ga-4">
                <PlaceholderPattern class="flex-grow-1" />
                <PlaceholderPattern class="flex-grow-1" />
                <PlaceholderPattern class="flex-grow-1" />
            </div>

            <PlaceholderPattern class="flex-grow-1" />
        </div>
    </AppLayout>
</template>
