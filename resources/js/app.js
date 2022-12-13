require('./bootstrap');
//alert('Mix installed !');
import { createApp } from 'vue';
import { createPinia } from 'pinia'

import App from './App.vue';
import router from './router';
import axios from 'axios';

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app');

// axios.defaults.headers.common['Autorization'] = authStore.getUserToken // Ne pas mettre les parenthèse () => error method is not defined
