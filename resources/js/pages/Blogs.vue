<template>
    <Header />

    <div class="text-4xl flex flex-col items-center">

        <div v-for="(blog, index) in blogs" class="my-5 card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2  class="card-title">{{ blog.title }}</h2>
                <div class="text-lg">
                    <p>{{ blog.description }}</p>
                    <p class="mt-2 text-sm">Créated at {{ blog.created_at }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/commons/Header.vue';
import { mapActions, mapState } from 'pinia';
import { useBlogStore } from '../store/blogs.js';

export default {
    name: "Blogs",
    components: {
        Header
    },
    computed: {
        ...mapState(useBlogStore, ['blogs'])
    },
    methods: {
        ...mapActions(useBlogStore, ['loadBlogs']),
    },
    async mounted() {
        await this.loadBlogs()
    }
}
</script>

<style scoped>

</style>