<template>
    <div class="text-4xl flex flex-col items-center">

        <div class="navbar bg-base-100 shadow-xl decoration-white flex justify-between">
            <router-link class="btn btn-primary normal-case text-xl" to="/">Home</router-link>
            <div class="text-xl">
                <router-link class="btn btn-primary normal-case text-xl" to="/register">Register</router-link>
                <router-link v-if="Object.entries(user).length == 0" class="ml-2 btn btn-primary normal-case text-xl" to="/login">Login</router-link>
                <button v-else class="ml-2 btn btn-primary normal-case text-xl" @click="logout()">Logout</button>
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useAuthStore } from '../../store/auth';

export default {
    name: "HomePage",
    computed: {
        ...mapState(useAuthStore, ['user'])
    },
    methods: {
        ...mapActions(useAuthStore, ['logout']),
    },
}
</script>

<style scoped>

</style>