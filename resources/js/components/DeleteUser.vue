<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

// Components
import HeadingSmall from '@/components/HeadingSmall.vue';
import InputError from '@/components/InputError.vue';

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
};
</script>

<template>
    <div class="space-y-6">
        <HeadingSmall title="Delete account" description="Delete your account and all of its resources" />
        <div class="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10">
            <div class="relative space-y-0.5 text-red-600 dark:text-red-100">
                <p class="font-medium">Warning</p>
                <p class="text-sm">Please proceed with caution, this cannot be undone.</p>
            </div>
            <VDialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                    <VBtn color="red" dark v-bind="attrs" v-on="on">Delete account</VBtn>
                </template>
                <VDialogTitle>Are you sure you want to delete your account?</VDialogTitle>
                <VDialogContent>
                    <form class="space-y-6" @submit="deleteUser">
                        <div class="space-y-3">
                            <p>
                                Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your
                                password to confirm you would like to permanently delete your account.
                            </p>
                        </div>

                        <div class="grid gap-2">
                            <VTextField id="password" type="password" name="password" ref="passwordInput" v-model="form.password" label="Password" />
                            <InputError :message="form.errors.password" />
                        </div>

                        <VDialogActions class="gap-2">
                            <VBtn color="secondary" @click="closeModal">Cancel</VBtn>
                            <VBtn color="red" dark :disabled="form.processing" type="submit">Delete account</VBtn>
                        </VDialogActions>
                    </form>
                </VDialogContent>
            </VDialog>
        </div>
    </div>
</template>
