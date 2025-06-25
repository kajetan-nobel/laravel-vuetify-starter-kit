import { router, usePage } from '@inertiajs/vue3'
import { computed, Plugin, Ref } from 'vue'

const plugin: Plugin = {
    install: (app) => {
        app.component('RouterLink', {
            useLink(props: { to: Ref<string> }) {
                const href = props.to
                const currentUrl = computed(() => {
                    const url = usePage().url || window.location.href
                    return url.includes('http') ? url : `${window.location.origin}${url}`
                })

                return {
                    route: computed(() => ({ href: href.value })),
                    isActive: computed(() => currentUrl.value.startsWith(href.value)),
                    isExactActive: computed(() => href.value === currentUrl.value),
                    navigate(e: KeyboardEvent) {
                        if (e.shiftKey || e.metaKey || e.ctrlKey) return
                        e.preventDefault()
                        router.visit(href.value)
                    },
                }
            },
        })
    },
}

export default plugin
