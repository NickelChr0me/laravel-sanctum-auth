<template>
    <Header />

    <div class="mt-5 flex flex-col space-y-4 gap-2">
        <div class="card-title self-center text-4xl">Register</div>
        <input type="text" placeholder="Name" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <input type="email" placeholder="Email" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <input type="password" placeholder="Password" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <input type="password" placeholder="Confirm Password" class="input input-bordered input-primary w-full max-w-xs self-center" />
        <button class="btn btn-primary w-24 self-center">
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

export default {
    name: "HomePage",
    components: {
        Header
    }
}
</script>

<style scoped>

</style>