<template>
    <div>
        <router-view>
        </router-view>
    </div>
</template>

<script>
import HomePage from './pages/HomePage.vue';

export default {
    name: "App.vue",
    components: {
        HomePage
    },
}
</script>

<style scoped>

</style>