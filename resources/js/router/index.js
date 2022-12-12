import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: () => import('../pages/HomePage.vue')
        },
        {
            path: '/register',
            name: 'Register',
            component: () => import('../pages/Register.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../pages/Login.vue')
        },
    ]
})

export default router