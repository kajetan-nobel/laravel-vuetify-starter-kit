import type { Plugin } from 'vue'
import { Head, Link } from '@inertiajs/vue3'

const plugin: Plugin = {
  install: (app) => {
    // Register components
    app.component('InertiaHead', Head)
    app.component('InertiaLink', Link)
  },
}

export default plugin
