<script>
import login from './views/login.vue'
import signup from './views/signup.vue'
import home from './views/home.vue'
import navbar from './components/navbar.vue'


export default {
  name: 'App', 
  components: {
    login,
    signup,
    navbar,
    home,
  }
} 
</script>

<template>
<router-view></router-view>
</template>

<style scoped>

</style>
