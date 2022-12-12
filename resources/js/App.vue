<template>
    <div>
        <h1 class="mt-5 text-4xl text-center hover:uppercase">
            Hello world!
        </h1>
    </div>
</template>

<script>
export default {
    name: "App.vue",
    mounted() {
        console.log("Coucou de vue");
    }
}
</script>

<style scoped>
h1 {
    color: blueviolet;
}
</style>