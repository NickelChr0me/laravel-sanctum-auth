import axios from 'axios'
import { defineStore } from 'pinia'
import router from '../router/index.js';

export const useAuthStore = defineStore('authId', {
    state: () => ({
        user: {},
    }),
    actions: {
        async register(credential) {
            this.user = await axios.post('/api/register', credential)
        },
        async login(credential) {
            await axios.get('/sanctum/csrf-cookie');
            this.user = (await axios.post('/api/login', credential)).data.data;
            router.push({name: 'HomePage'});
        },
        async logout() {
            await axios.get('/api/logout');
            this.user = {};
            router.push({name: 'HomePage'});
        },
    },
})