<template>
    <Header />

    <div class="mt-5 flex flex-col space-y-4 gap-2">
        <div class="card-title self-center text-4xl">Login</div>
        <input v-model="user.email" type="email" placeholder="Email" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <input v-model="user.password" type="password" placeholder="Password" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <!-- <div class="self-center flex"><input type="checkbox" checked="checked" class="checkbox checkbox-primary cursor-pointer" >&nbsp;Remember me ?</div> -->
        <button @click="submitLogin()" class="btn btn-primary w-24 self-center">
            Sign In
        </button>
        <div class="self-center">
            <router-link to="/register">
                <a class="text-primary ">Or create an account ?</a>
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
                email: "",
                password: "",
            },
        }
    },
    computed: {
        ...mapStores(useAuthStore)
    },
    methods: {
        submitLogin()
        {
            this.authIdStore.login(this.user);
        },
    },
}
</script>

<style scoped>

</style>