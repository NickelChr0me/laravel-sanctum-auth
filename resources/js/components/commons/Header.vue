<template>
    <div class="text-4xl flex flex-col items-center">

        <div class="navbar bg-base-100 shadow-xl decoration-white flex justify-between">
            <router-link class="btn btn-primary normal-case text-xl" to="/">Home</router-link>
            <div class="text-xl">
                <router-link class="btn btn-primary normal-case text-xl" to="/register">Register</router-link>
                <router-link class="ml-2 btn btn-primary normal-case text-xl" to="/login">Login</router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "HomePage",
}
</script>

<style scoped>

</style>