<template>
    <Header />

    <div class="text-4xl flex flex-col items-center">

        <div class="my-5 card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center">
                <h2 class="card-title">Hello world!</h2>
                <div class="card-actions justify-end">
                    <a href="https://github.com/NickelChr0me/laravel-sanctum-auth/" target="_blank">
                        <button class="btn btn-primary" >GitHub of project</button>
                    </a>
                </div>
            </div>
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