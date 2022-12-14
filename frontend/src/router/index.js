import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createRouter, createWebHistory } from 'vue-router'

import * as Auth from '../views/auth'
import * as Public from '../views/public'
import { authGuard } from '../_helpers/auth-guard.js'

const routes = [

    { path: '/login', name: 'login', component: Auth.login },
    { path: '/signup', component: Auth.signup },
    { path: '/:pathMatch(.*)*', redirect:'/login'},

    { 
        path: '/', 
        name: 'public',
        redirect: '/login',
        component: Public.publicLayout,
        children: [
            { path: '/home', component: Public.home },
            { path: '/createpost/', component: Public.createpost, prop: true },
            { path: '/editpost/:id(\\d+)', name : 'editPost', component: Public.editpost},
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if(to.matched[0].name == 'public') {
        authGuard()
    }
    if(to.matched[0].name == 'login') {
        let token = localStorage.getItem('user')
        if(token) {
            router.push('/home')
            return true
        }
    }
    next()
})

export default router;