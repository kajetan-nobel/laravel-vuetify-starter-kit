import type { Plugin } from 'vue';
import { createVuetify, VuetifyOptions } from 'vuetify';

const config: Partial<VuetifyOptions> = {
    defaults: {
        VCard: {
            flat: true,
        },
        VBtn: {
            flat: true,
        },
        VInput: {
            hideDetails: 'auto',
        },
        VTextField: {
            hideDetails: 'auto',
        },
        VFileInput: {
            hideDetails: 'auto',
        },
        VTextarea: {
            hideDetails: 'auto',
        },
        VCombobox: {
            hideDetails: 'auto',
        },
        VAutocomplete: {
            hideDetails: 'auto',
        },
        VSelect: {
            hideDetails: 'auto',
        },
        VCheckbox: {
            hideDetails: 'auto',
        },
        VSwitch: {
            hideDetails: 'auto',
        },
        VSlider: {
            hideDetails: 'auto',
        },
        VRangeSlider: {
            hideDetails: 'auto',
        },
    },
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#f53003',
                },
            },
            dark: {
                colors: {
                    primary: '#ff4433',
                    background: '#0a0a0a',
                    'on-background': '#ededec',
                    surface: '#161615',
                },
            },
        },
    },
};

const plugin: Plugin = {
    install(app) {
        const vuetify = createVuetify(config);
        app.use(vuetify);
    },
};

export default plugin;
