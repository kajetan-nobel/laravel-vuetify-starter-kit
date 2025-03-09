<script setup lang="ts">
import { InertiaLinkProps, Link } from '@inertiajs/vue3';

interface Props {
    href: string;
    tabindex?: number;
    method?: InertiaLinkProps['method'];
    as?: string;
}

defineProps<Props>();
</script>

<template>
    <Link :href="href" :tabindex="tabindex" :method="method" :as="as" class="on-background">
        <slot />
    </Link>
</template>
