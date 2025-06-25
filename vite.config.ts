import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import path from 'path'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import fonts from 'unplugin-fonts/vite'
import compression from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.ts'],
      ssr: 'resources/js/ssr.ts',
      refresh: true,
    }),
    autoImport({
      dirs: ['./resources/js/composables/**'],
      imports: [
        'vue',
        {
          vue: ['mergeProps'],
          vuetify: ['useDisplay', 'useLayout'],
          'ziggy-js': ['route'],
          '@inertiajs/vue3': ['usePage', 'usePoll'],
          'laravel-precognition-vue': ['useForm'],
          'laravel-precognition-vue-inertia': [['useForm', 'useInertiaForm']],
        },
      ],
      eslintrc: {
        enabled: true,
      },
      vueTemplate: true,
      viteOptimizeDeps: true,
      dts: './resources/js/types/auto-imports.d.ts',
    }),
    components({
      dirs: ['./resources/js/components'],
      deep: true,
      directoryAsNamespace: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      version: 3,
      dts: './resources/js/types/auto-components.d.ts',
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('swiper'),
        },
      },
    }),
    vuetify({
      autoImport: true,
      styles: {
        configFile: 'resources/css/vuetify-components.scss',
      },
    }),
    fonts({
      typekit: {
        id: '',
        defer: true,
      },
    }),
    compression(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/js'),
    },
  },
})
