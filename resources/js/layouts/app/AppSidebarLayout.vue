<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue';
import { useInitials } from '@/composables/useInitials';
import type { BreadcrumbItemType } from '@/types';
import { router } from '@inertiajs/vue3';

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});

const { getInitials } = useInitials();
</script>

<template>
    <VApp>
        <VNavigationDrawer>
            <template #prepend>
                <VList nav density="compact">
                    <VListItem :to="route('dashboard')" :active="false">
                        <AppLogo />
                    </VListItem>
                </VList>
            </template>
            <VList
                nav
                density="compact"
                :items="[
                    {
                        type: 'subheader',
                        title: 'Platform',
                    },
                    {
                        title: 'Dashboard',
                        props: {
                            to: route('dashboard'),
                            prependIcon: 'mdi-view-dashboard-outline',
                        },
                    },
                ]"
            />
            <template #append>
                <VList
                    nav
                    density="compact"
                    :items="[
                        {
                            title: 'Github Repo',
                            props: {
                                href: 'https://github.com/kajetan-nobel/laravel-vuetify-starter-kit',
                                target: '_blank',
                                prependIcon: 'mdi-folder-outline',
                            },
                        },
                        {
                            title: 'Documentation',
                            props: {
                                href: 'https://laravel.com/docs/starter-kits',
                                target: '_blank',
                                prependIcon: 'mdi-book-open-blank-variant-outline',
                            },
                        },
                        {
                            title: 'Vuetify',
                            props: {
                                href: 'https://vuetifyjs.com',
                                target: '_blank',
                                prependIcon: 'mdi-vuetify',
                            },
                        },
                    ]"
                />
                <VMenu>
                    <template #activator="{ props }">
                        <VList nav density="compact">
                            <VListItem
                                v-bind="props"
                                class="font-weight-bold"
                                :title="$page.props.auth.user.name"
                                append-icon="mdi-unfold-more-horizontal"
                            >
                                <template #prepend>
                                    <VAvatar rounded color="grey-darken-4" class="text-overline" :text="getInitials($page.props.auth.user.name)" />
                                </template>
                            </VListItem>
                        </VList>
                    </template>

                    <VList
                        nav
                        :items="[
                            {
                                title: $page.props.auth.user.name,
                                props: {
                                    lines: 'two',
                                    subtitle: $page.props.auth.user.email,
                                },
                            },
                            {
                                title: 'Settings',
                                props: {
                                    to: route('profile.edit'),
                                    prependIcon: 'mdi-cog-outline',
                                },
                            },
                            {
                                title: 'Log out',
                                props: {
                                    prependIcon: 'mdi-logout',
                                    link: true,
                                    onClick: () => router.post(route('logout')),
                                },
                            },
                        ]"
                    />
                </VMenu>
            </template>
        </VNavigationDrawer>
        <VAppBar flat :extension-height="1">
            <VBreadcrumbs :items="breadcrumbs" />

            <template #extension>
                <VDivider />
            </template>
        </VAppBar>
        <VMain>
            <VContainer fluid class="h-100">
                <slot />
            </VContainer>
        </VMain>
    </VApp>
</template>
