import axios from 'axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authId', {
    state: () => ({
        user: {
            name: "",
            tokenAPI: "",
        }
    }),
    getters: () => ({
        getUserName: (state) => state.user.name,
        getUserToken: (state) => state.user.tokenAPI,

    }),
    actions: () => ({
        async register(user) {
            await axios.post('/api/register', user)
            .then(response => {
                const authStore = this.authIdStore
                authStore.login({email: user.email, password: user.password});
                router.push({name: 'HomePage'});
            })
            .catch(response => {
                alert(response)
            });
        },
        async login(user) {
            await axios.post('/api/login', user)
            .then(response => {
                this.setTokenApi(response.data.token);
                this.user.name = user.name;
                router.push({name: 'HomePage'});
            })
            .catch(response => {
                alert(response)
            });
        },
        setTokenApi(token)
        {
            this.user.tokenAPI = token;
        }
    }),
})