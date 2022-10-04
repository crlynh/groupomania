import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createRouter, createWebHistory } from 'vue-router'

import login from '../views/public/login.vue'
import signup from '../views/public/signup.vue'
import home from '../views/public/home.vue'
import createpost from '../views/public/createpost.vue'
import loginadmin from '../views/admin/loginadmin.vue'
import publicLayout from '../views/public/layout.vue'
import adminLayout from '../views/admin/layout.vue'

const routes = [
    { 
        path: '/', 
        redirect: '/login',
        component: publicLayout, 
        children: [
            { path: '/home', component: home },
            { path: '/createpost', component: createpost },
        ],
    },

    { 
        path: '/admin', 
        redirect:'/adminlogin',
        component: adminLayout, 
        children: [
            { path: '/loginadmin', component: loginadmin },
        ],
    },

        { path: '/login', component: login },
        { path: '/signup', component: signup },
        { path: '/:pathMatch(.*)*', redirect:'/login'},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;