<script>
import jwt_decode from "jwt-decode"
import Axios from '../store/caller.axios'

export default {
    name: 'profilecard',

    data() {
      return {
        users : [],
      };
    },

    methods: {
      getUserData() {
        const token = this.$store.state.user.token
        const decoded = jwt_decode(token)
        this.users = decoded
      },

      deleteUser() {
        alert("Cette fonctionnalité n'est pas encore disponible")
        // const userId = this.$store.state.user.userId
        // console.log(userId)
        // if (window.confirm("Êtes-vous sûr de vouloir supprimer ce compte ? Cette action est irréversible")) {
        //   Axios.delete('/user/'+userId)
        //   .then(res => localStorage.removeItem('user'),
        //   window.location.href  = "/login")
        //   .catch(err => console.log(err))
        // } else {
        //     return false
        // }
      }
    },

    mounted() {
      this.getUserData()
    }
}


</script>

<template v-for="user in users" :key="user._id">
  <section class="card shadow rounded h-20 border mb-5 pb-4 position-relative" >
    <div class = "dropdown p-2 position-absolute top-0 end-0 m-2" >
      <div data-bs-toggle="dropdown" >
        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
      </div>
      <ul class="dropdown-menu" >
        <li><a class="dropdown-item edit" @click="deleteUser()">Supprimer mon compte</a></li>
      </ul>
    </div>
    <div class="card-body text-center">
      <img src="../assets/images/png-clipart-computer-icons-user-profile-avatar-avatar-heroes-monochrome.png" alt="avatar"
        class="rounded-circle img-fluid" style="width: 150px;">
      <h5 class="my-3">{{ users.firstName }} {{ users.lastName }}</h5>
      <p class="text-muted mb-1">{{ users.email }}</p>
    </div>
  </section>
</template>

<style>
</style>