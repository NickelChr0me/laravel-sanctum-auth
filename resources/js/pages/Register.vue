<template>
    <Header />

    <div class="mt-5 flex flex-col space-y-4 gap-2">
        <div class="card-title self-center text-4xl">Register</div>
        <input v-model="credential.name" type="text" placeholder="toto" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <input v-model="credential.email" type="email" placeholder="toto@gmail.com" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <input v-model="credential.password" type="password" placeholder="password" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <input v-model="credential.confirm_password" type="password" placeholder="password" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <button @click="register(credential)" class="btn btn-primary w-24 self-center">
            Sign Up
        </button>
        <div class="self-center">
            <router-link to="/login">
                <a class="text-primary">You have already account ?</a>
            </router-link>
        </div>
    </div>
</template>

<script>
import Header from '../components/commons/Header.vue';
import { mapActions } from 'pinia';
import { useAuthStore } from '../store/auth';

export default {
    name: "Register",
    components: {
        Header
    },
    data()
    {
        return {
            credential: {
                name: "toto",
                email: "toto@gmail.com",
                password: "123soleil",
                confirm_password: "123soleil"
            },
        }
    },
    methods: {
        ...mapActions(useAuthStore, ['register']),
    }
}
</script>

<style scoped>

</style>