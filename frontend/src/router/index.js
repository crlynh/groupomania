import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createRouter, createWebHistory } from 'vue-router'

import * as Auth from '../views/auth'
import * as Public from '../views/public'
import * as Admin from '../views/admin'

import { authGuard } from '../_helpers/auth-guard.js'

const routes = [

    { path: '/login', component: Auth.login },
    { path: '/signup', component: Auth.signup },
    // { path: '/:pathMatch(.*)*', redirect:'/login'},

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

    { 
        path: '/admin',
        name: 'admin',
        component: Admin.adminLayout, 
        children: [ 
            { path: '/admin/home', component: Admin.home },
            { path: '/admin/users/edit', component: Admin.editusers, props: true }
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// router.beforeEach((to, from, next) => {
//     if(to.matched[0].name == 'admin') {
//         authGuard()
//     }
//     if(to.matched[0].name == 'public') {
//         authGuard()
//     }
//     next()
// })

export default router;