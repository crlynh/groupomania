<script>
import LoginSignUp from './components/loginsignup.vue'
import Navbar from './components/navbar.vue'

export default {
  name: 'App', 
  components: {
    LoginSignUp,
    Navbar,
  }
} 
</script>

<template>
<router-view></router-view>
</template>

<style scoped>

</style>
