import { useAppearance } from '@/composables/useAppearance'
import routerLinkPlugin from '@/plugins/routelink'
import vuetifyPlugin from '@/plugins/vuetify'
import uiPlugin from '@/plugins/ui'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { createApp, DefineComponent, h } from 'vue'
import { ZiggyVue } from 'ziggy-js'

import '../css/app.scss'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob<DefineComponent>('./pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({
            setup() {
                useAppearance()
            },
            render: () => h(App, props),
        })
            .use(plugin)
            .use(ZiggyVue)
            .use(vuetifyPlugin)
            .use(routerLinkPlugin)
            .use(uiPlugin)
            .mount(el)
    },
    progress: {
        color: '#4B5563',
    },
})
