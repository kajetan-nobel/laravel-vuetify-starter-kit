import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import {
  defineConfigWithVueTs,
  vueTsConfigs
} from '@vue/eslint-config-typescript'
import AutoImportJson from './.eslintrc-auto-import.json' with { type: 'json' }

export default defineConfigWithVueTs(
  {
    languageOptions: {
      ...AutoImportJson,
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  ...pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommendedTypeChecked,
  {
    name: 'app/files-to-lint',
    files: ['./resources/js/**/*.{ts,mts,tsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      '**/node_modules/**',
      '**/routes.d.ts',
      '**/auto-imports.d.ts',
      '**/auto-components.d.ts',
      '**/vendor/**',
      '**/public/**',
    ],
  },
  {
    rules: {
      quotes: ['warn', 'single'],
      semi: ['warn', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
      'vue/multi-word-component-names': 'off',
      'vue/script-indent': ['error', 2, { 'baseIndent': 0 }],
      'vue/valid-v-slot': ['error', {
        allowModifiers: true,
      }],
      'vue/max-attributes-per-line': ['error', {
        'singleline': {
          'max': 2
        },
        'multiline': {
          'max': 1
        }
      }],
      'vue/no-v-text-v-html-on-component': 0,
      'vue/no-v-html': 0,
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
      '@typescript-eslint/no-unused-vars': 0,
      '@typescript-eslint/no-namespace': 0,
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      '@typescript-eslint/no-empty-object-type': 0,
      '@typescript-eslint/no-floating-promises': 0,
    }
  }
)
