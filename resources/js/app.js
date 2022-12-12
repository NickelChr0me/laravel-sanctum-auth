require('./bootstrap');
//alert('Mix installed !');
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import { useAuthStore } from './store/auth';

import App from './App.vue';
import router from './router';
import axios from 'axios';

const pinia = createPinia()

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app');

const authStore = useAuthStore()
axios.defaults.headers.common['Autorization'] = authStore.getUserToken // Ne pas mettre les parenthèse () => error method is not defined
