<template>
    <div class="text-4xl flex flex-col items-center">

        <div class="navbar bg-base-100 shadow-xl decoration-white">
            <a class="btn btn-primary normal-case text-xl" href="https://daisyui.com/" target="_blank">daisyUI</a>
        </div>

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
export default {
    name: "App.vue",
    mounted() {
        console.log("App.vue mounted !");
    }
}
</script>

<style scoped>

</style>