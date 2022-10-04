import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createRouter, createWebHistory } from 'vue-router'

import login from '../views/public/login.vue'
import signup from '../views/public/signup.vue'
import home from '../views/public/home.vue'
import createpost from '../views/public/createpost.vue'
import loginadmin from '../views/admin/loginadmin.vue'

const routes = [
    { path: '/:pathMatch(.*)*', redirect:'/login'},
    { path: '/login', component: login },
    { path: '/signup', component: signup },
    { path: '/home', component: home },
    { path: '/createpost', component: createpost },
    { path: '/loginadmin', component: loginadmin },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;