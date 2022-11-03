<script>
import login from './views/auth/login.vue'
import signup from './views/auth/signup.vue'
import home from './views/public/home.vue'
import profilecard from './components/profilecard.vue'
import userscard from './components/userscard.vue'
import card from './components/card.vue'
import createpost from './views/public/createpost.vue'
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
    profilecard,
    userscard,
    card,
    createpost,
  },
  methods: {
    logoutExpiredToken() {
      Axios.interceptors.response.use(response => {
      return response
      }, error => {
      console.log(error)
    

    if(!error.response){
        // Erreur rzo
        store.commit('displayNotif', {d: true, mes: error})
        return Promise.reject(error)
    }else{
        if(error.response.status == 401){
            localStorage.removeItem('user')
            router.push('/login')
        }else{
            // Erreur de l'API
            store.commit('displayNotif', {d: true, mes: error.response.data.message})
            return Promise.reject(error)
        }
    }
})
    }
  }
} 
</script>

<template>
<router-view></router-view>
</template>

<style scoped>

</style>
