<script>
import SignIn from './views/signin.vue'
import Navbar from './components/navbar.vue'
import HomePage from './views/homepage.vue'

export default {
  name: 'App', 
  components: {
    SignIn,
    Navbar,
    HomePage,
  }
} 
</script>

<template>
<router-view></router-view>
</template>

<style scoped>

</style>
