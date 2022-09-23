import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createRouter, createWebHistory } from 'vue-router'

import login from '../views/login.vue'
import signup from '../views/signup.vue'
import home from '../views/home.vue'

const routes = [
    { path: '/login', component: login },
    { path: '/signup', component: signup },
    { path: '/home', component: home },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;