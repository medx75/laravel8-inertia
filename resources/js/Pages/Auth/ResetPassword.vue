<template>
    <AuthCard>
        <AuthSessionStatus class="mb-4" :status="status" />
        <AuthValidationErrors class="mb-4" :errors="errors" />
        <form @submit.prevent="submit">
            <input type="hidden" v-model="form.token" />
            <div class="mb-4">
                <Label for="email" value="Email"/>
                <Input type="email" id="email" v-model="form.email" class="mt-1 block w-full" required autofocus />
            </div>
            <div class="mb-4">
                <Label for="password" value="Password"/>
                <Input type="password" id="password" v-model="form.password" class="mt-1 block w-full" required />
            </div>
            <div class="mb-4">
                <Label for="password-confirm" value="Confirm Password"/>
                <Input type="password" id="password" v-model="form.password_confirmation" class="mt-password-confirm block w-full" required />
            </div>
            <div class="flex items-center justify-end mt-4">
                <Button>
                    Reset Password
                </Button>
            </div>
        </form>
    </AuthCard>
</template>

<script>
import { Inertia } from '@inertiajs/inertia'

import Layout from '@/Shared/Layout'
import AuthCard from '@/Components/AuthCard'
import AuthValidationErrors from '@/Components/AuthValidationErrors'
import AuthSessionStatus from '@/Components/AuthSessionStatus'
import Label from '@/Components/Label'
import Input from '@/Components/Input'
import Button from '@/Components/Button'
    
export default {
    layout: Layout,
    props: {
        errors: Object,
        request: Object,
        token: String,
        status: String,
    },
    components: {
        AuthCard,
        AuthValidationErrors,
        AuthSessionStatus,
        Label,
        Input,
        Button,
    },
    data() {
        return {
            form: {
                email: this.request.email,
                token: this.token,
                password: '',
                password_confirmation: '',
            },
        };
    },
    methods: {
        submit() {
            Inertia.post(route('password.update'), this.form, {
                preserveScroll: true,
                onProgress: (form) => {
                    document.querySelector('Button').classList.add('cursor-not-allowed', 'opacity-25');
                },
                onFinish: (form) => {
                    document.querySelector('Button').classList.remove('cursor-not-allowed', 'opacity-25');
                },
            });
        },
    },
    metaInfo: {
        title: 'Reset Password',
    },
};
</script>
