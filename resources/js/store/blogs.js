import axios from 'axios'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blogsId', {
    state: () => ({
        blogs: {}
    }),
    actions: {
        async loadBlogs()
        {
            this.blogs = (await axios.get('/api/blogs')).data.data
        }
    },
})