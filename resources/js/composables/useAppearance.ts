import { usePreferredColorScheme } from '@vueuse/core';
import { onMounted, ref, watch } from 'vue';
import { useTheme } from 'vuetify';

type Appearance = 'light' | 'dark' | 'system';

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === 'undefined') {
        return;
    }

    const maxAge = days * 24 * 60 * 60;

    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

export function useAppearance() {
    const appearance = ref<Appearance>('system');
    const theme = useTheme();
    const auto = usePreferredColorScheme();

    onMounted(() => {
        const savedAppearance = localStorage.getItem('appearance') as Appearance | null;

        if (savedAppearance) {
            appearance.value = savedAppearance;
        }
    });

    function updateAppearance(value: Appearance) {
        appearance.value = value;

        // Store in localStorage for client-side persistence...
        localStorage.setItem('appearance', value);

        // Store in cookie for SSR...
        setCookie('appearance', value);
    }

    watch(appearance, () => (theme.global.name.value = appearance.value === 'system' ? auto.value : appearance.value), { immediate: true });

    return {
        appearance,
        updateAppearance,
    };
}
