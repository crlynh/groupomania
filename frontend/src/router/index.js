import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createRouter, createWebHistory } from 'vue-router'

import * as Auth from '../views/auth'
import * as Public from '../views/public'
import * as Admin from '../views/admin'

import { authGuard } from '../_helpers/auth-guard.js'

const routes = [
    { 
        path: '/', 
        name: 'login',
        redirect: '/login',
        component: Public.publicLayout,
        children: [
            { path: '/home', component: Public.home },
            { path: '/createpost', component: Public.createpost },
        ],
    },

    { 
        path: '/admin',
        name: 'admin',
        component: Admin.adminLayout, 
        children: [ 
            { path: '/admin/home', component: Admin.home },
            { path: '/admin/post/edit', component: Admin.editpost },
            { path: '/admin/users/edit/:id', component: Admin.editusers, props: true }
        ],
    },

        { path: '/login', component: Auth.login },
        { path: '/signup', component: Auth.signup },
        { path: '/:pathMatch(.*)*', redirect:'/login'},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if(to.matched[0].name == 'admin') {
        authGuard()
    }
    if(to.matched[0].name == 'login') {
        authGuard()
    }
    next()
})

export default router;