import type { Plugin } from 'vue';
import { createVuetify, VuetifyOptions } from 'vuetify';

const config: Partial<VuetifyOptions> = {
    theme: {
        defaultTheme: 'dark',
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
