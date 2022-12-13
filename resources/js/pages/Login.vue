<template>
    <Header />

    <div class="mt-5 flex flex-col space-y-4 gap-2">
        <div class="card-title self-center text-4xl">Login</div>
        <input v-model="credential.email" type="email" placeholder="Email" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <input v-model="credential.password" type="password" placeholder="Password" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <!-- <div class="self-center flex"><input type="checkbox" checked="checked" class="checkbox checkbox-primary cursor-pointer" >&nbsp;Remember me ?</div> -->
        <button @click="login(credential)" class="btn btn-primary w-24 self-center">
            Sign In
        </button>
        <button @click="loadBlogs()" class="btn btn-primary w-24 self-center">
            Load Blogs
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
import { mapActions } from 'pinia';
import { useAuthStore } from '../store/auth.js';

export default {
    name: "HomePage",
    components: {
        Header
    },
    data()
    {
        return {
            credential: {
                email: "",
                password: "",
            },
        }
    },
    methods: {
        ...mapActions(useAuthStore, ['login', 'loadBlogs']),
    },
}
</script>

<style scoped>

</style>