<script setup lang="ts">
import HeadingSmall from '@/components/HeadingSmall.vue';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const dialog = ref<boolean>(false);
const passwordInput = ref<HTMLInputElement | null>(null);

const form = useForm({
    password: '',
});

const deleteUser = (e: Event) => {
    e.preventDefault();

    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value?.focus(),
        onFinish: () => form.reset(),
    });
};

const closeModal = () => {
    form.clearErrors();
    form.reset();
    dialog.value = false;
};
</script>

<template>
    <div class="my-3 d-flex flex-column ga-4">
        <HeadingSmall title="Delete account" description="Delete your account and all of its resources" />

        <VAlert variant="tonal" border color="error">
            <p class="font-weight-bold mb-0">Warning</p>
            <p class="mb-3">Please proceed with caution, this cannot be undone.</p>
            <VBtn color="primary" text="Delete account" @click.prevent="dialog = true" />
        </VAlert>

        <VDialog v-model="dialog" max-width="500px" persistent>
            <form @submit.prevent="deleteUser">
                <VCard
                    title="Are you sure you want to delete your account?"
                    text="Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."
                >
                    <VCardText class="pt-0">
                        <VTextField
                            id="password"
                            type="password"
                            name="password"
                            ref="passwordInput"
                            v-model="form.password"
                            label="Password"
                            :error-messages="form.errors.password"
                        />
                    </VCardText>
                    <template #actions>
                        <VBtn @click="closeModal">Cancel</VBtn>
                        <VBtn color="primary" :disabled="form.processing" :loading="form.processing" type="submit" text="Delete account" />
                    </template>
                </VCard>
            </form>
        </VDialog>
    </div>
</template>
