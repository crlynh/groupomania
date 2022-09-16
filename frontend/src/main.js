import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


import App from './App.vue'
import Login from './components/Login.vue' 
import Signup from './components/signup.vue'
import Homepage from './components/homepage.vue'

const routes = [
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/homepage', component: Homepage },
    // { path: '/login', component: Login },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')
