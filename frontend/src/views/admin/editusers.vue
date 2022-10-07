<script>
import adminNavbar from '../../components/adminNavbar.vue'
import footerpage from '../../components/footer.vue'

import axios from 'axios';

export default {
    name: 'edituser',
    data() {
      return {
        users : []
      }    
  },
    components: {
        adminNavbar,
        footerpage
    },
    computed : {
      numberOfUsers() {
        return (this.users.length == 0) ? 'Aucun utilisateur' : `Nombre d'utilisateurs: ${this.users.length}`
      }
    },
    methods: {
      getAllUsers() {
      axios.get('http://localhost:3000/api/user')
      .then(res => {
        this.users = res.data
        console.log(res.data)
      })
      .catch(err => console.log(err))
      },

      // deleteUsers(user) {
      //   axios.delete('http://localhost:3000/api/user'+user._id)
      //   .then(res => {
      //   this.getAllUsers()
      //   // this.users.splice(user,1)
      //   })
      //   .catch(err => console.log(err))
      // }

    },
    mounted() {
      this.getAllUsers()
    },

}
</script>>

<template>
<main>

<admin-navbar></admin-navbar>

<section class="usercard" > 
  <div class="container py-5">
<!------------ Back to home page ------------>
        <div class="border-bottom mb-4">
            <router-link to="/admin/home" class="link-secondary"> 
            <font-awesome-icon icon="fa-solid fa-arrow-left" class="mb-3" />
            </router-link>
        </div>
<!------------ Back to home page ------------>
    <h3>Liste des utilisateurs</h3>
    <h5  class=" pb-5">{{ numberOfUsers }}</h5>
    <div class="row h-30" v-for="user in users" :key="user._id">
      <div class="col mb-4 mb-lg-0">
        <div class="card mb-3" style="border-radius: .5rem;">
          <div class="row g-0">
            <div class="name col-md-4 gradient-custom text-white pt-2 d-flex flex-column text-center justify-content-center"
              style="border-radius: .5rem">
                <div><h5>{{ user.nom }}</h5></div>
                <div><h5>{{ user.prenom }}</h5></div>
            </div>
              <div class="card-body col-md-8 p-3">
                <div class="d-flex flex-row justify-content-between">
                  <h4>Informations</h4>
                  <div class="del" @click="deleteUsers(user)">
                    <font-awesome-icon icon="fa-solid fa-trash-can" /></div> 
                </div>               
                <hr class="mt-0 mb-8">
                <div class="row">
                  <div class="col-6">
                    <h5>Email</h5>
                    <p class="text-muted">{{ user.email }}</p>
                  </div>
                  <div class="col-6">
                    <h5>Id de l'utilisateur</h5>
                    <p class="text-muted">{{ user._id }}</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    <footerpage></footerpage>
</main>

</template>

<style>
.usercard {
  background-color:#eee
}

.del {
  cursor: pointer;
}

.gradient-custom {
/* fallback for old browsers */
background: #f6d365;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to right bottom, #ee7724, #FD2D01, #dd3675, #b44593);

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to right bottom, #ee7724, #FD2D01, #dd3675, #b44593)
}

</style>