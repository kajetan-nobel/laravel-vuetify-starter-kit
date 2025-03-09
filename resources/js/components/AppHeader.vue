<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import UserMenuContent from '@/components/UserMenuContent.vue';
import { getInitials } from '@/composables/useInitials';
import type { BreadcrumbItem, NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { BookOpen, Folder, LayoutGrid } from 'vuetify/lib/components';

interface Props {
    breadcrumbs?: BreadcrumbItem[];
}

const props = withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});

const page = usePage();
const auth = computed(() => page.props.auth);

const isCurrentRoute = computed(() => (url: string) => page.url === url);

const activeItemStyles = computed(
    () => (url: string) => (isCurrentRoute.value(url) ? 'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100' : ''),
);

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
];

const rightNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/vue-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen,
    },
];
</script>

<template>
    <div>
        <v-app-bar app>
            <v-toolbar>
                <!-- Mobile Menu -->
                <div class="lg:hidden">
                    <v-btn icon @click="drawer = !drawer">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </div>

                <Link :href="route('dashboard')" class="flex items-center gap-x-2">
                    <AppLogo />
                </Link>

                <!-- Desktop Menu -->
                <div class="hidden h-full lg:flex lg:flex-1">
                    <v-toolbar-items class="ml-10 flex h-full items-stretch">
                        <v-btn
                            v-for="(item, index) in mainNavItems"
                            :key="index"
                            :href="item.href"
                            class="relative flex h-full items-center"
                            :class="[activeItemStyles(item.href), 'h-9 cursor-pointer px-3']"
                        >
                            <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
                            {{ item.title }}
                        </v-btn>
                    </v-toolbar-items>
                </div>

                <div class="ml-auto flex items-center space-x-2">
                    <div class="relative flex items-center space-x-1">
                        <v-btn icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>

                        <div class="hidden space-x-1 lg:flex">
                            <v-tooltip v-for="item in rightNavItems" :key="item.title">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon v-bind="attrs" v-on="on" :href="item.href" target="_blank" rel="noopener noreferrer">
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </v-btn>
                                </template>
                                <span>{{ item.title }}</span>
                            </v-tooltip>
                        </div>
                    </div>

                    <v-menu>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on">
                                <v-avatar>
                                    <v-img v-if="auth.user.avatar" :src="auth.user.avatar" :alt="auth.user.name" />
                                    <span v-else>{{ getInitials(auth.user?.name) }}</span>
                                </v-avatar>
                            </v-btn>
                        </template>
                        <v-list>
                            <UserMenuContent :user="auth.user" />
                        </v-list>
                    </v-menu>
                </div>
            </v-toolbar>
        </v-app-bar>

        <div v-if="props.breadcrumbs.length > 1" class="flex w-full border-b border-sidebar-border/70">
            <div class="mx-auto flex h-12 w-full items-center justify-start px-4 text-neutral-500 md:max-w-7xl">
                <Breadcrumbs :breadcrumbs="breadcrumbs" />
            </div>
        </div>
    </div>
</template>
