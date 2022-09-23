import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createRouter, createWebHistory } from 'vue-router'

import SignIn from '../views/signin.vue'
import HomePage from '../views/homepage.vue'

const routes = [
    { path: '/', component: SignIn },
    { path: '/homepage', component: HomePage },
    // { path: '/login', component: Login },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;