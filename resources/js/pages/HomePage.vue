<template>
    <Header />

    <div class="text-4xl flex flex-col items-center">

        <div class="my-5 card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center">
                <h2 class="card-title text-3xl">Hello {{ Object.entries(user).length !== 0 ? user.name : 'world' }} !</h2>
                <router-link to="/blogs">
                    <button class="btn btn-primary normal-case text-xl self-center">
                        Load Blogs
                    </button>
                </router-link>
                <p class="normal-case text-xl">Please login to view blogs</p>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/commons/Header.vue';
import { mapState } from 'pinia';
import { useAuthStore } from '../store/auth';

export default {
    name: "HomePage",
    components: {
        Header
    },
    computed: {
        ...mapState(useAuthStore, ['user'])
    },
}
</script>

<style scoped>

</style>