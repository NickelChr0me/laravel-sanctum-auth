import axios from 'axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authId', {
    state: () => ({
        user: {},
        blogs: {}
    }),
    actions: {
        async register(credential) {
            let response = await axios.post('/api/register', credential)
            this.user = response.data;
        },
        async login(credential) {
            await axios.get('/sanctum/csrf-cookie');
            const response =  await axios.post('/api/login', credential);
            this.user = response.data;
        },
        async loadBlogs()
        {
            const response = await axios.get('/api/blogs')
            this.blogs = response.data;
        }
    },
})