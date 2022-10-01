<script>
import login from './views/login.vue'
import signup from './views/signup.vue'
import home from './views/home.vue'
import card from './components/card.vue'
import createpost from './views/createpost.vue'
import navbar from './components/navbar.vue'
import footerpage from './components/footer.vue'


export default {
  name: 'App', 
  components: {
    login,
    signup,
    navbar,
    footerpage,
    home,
    card,
    createpost
  }
} 
</script>

<template>
<router-view></router-view>
</template>

<style scoped>

</style>
