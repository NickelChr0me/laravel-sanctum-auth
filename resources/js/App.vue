<template>
    <div>
        <h1>Hello From Vue</h1>
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