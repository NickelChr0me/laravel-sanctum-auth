<template>
    <Header />

    <div class="mt-5 flex flex-col space-y-4 gap-2">
        <div class="card-title self-center text-4xl">Register</div>
        <input v-model="user.name" type="text" placeholder="toto" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <input v-model="user.email" type="email" placeholder="toto@gmail.com" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <input v-model="user.password" type="password" placeholder="password" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <input v-model="user.confirm_password" type="password" placeholder="password" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <button @click="register()" class="btn btn-primary w-24 self-center">
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
import { mapStores } from 'pinia';
import { useAuthStore } from '../store/auth.js';

export default {
    name: "HomePage",
    components: {
        Header
    },
    data()
    {
        return {
            user: {
                name: "",
                email: "",
                password: "",
                confirm_password: ""
            },
        }
    },
    computed: {
        ...mapStores(useAuthStore)
    },
    methods: {
        submitRegister()
        {
            this.authIdStore.register(this.user);
        }
    }
}
</script>

<style scoped>

</style>