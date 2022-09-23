import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'


const app = createApp(App)

createApp(App).use(router).use(store).mount('#app')
