<script>
import Axios from '../store/caller.axios';
import { mapState } from "vuex";

export default {
    name: 'userscard',

    data() {
      return {
        users : [],
      };
    },

    computed : {
      numberOfUsers() {
        return (this.users.length == 0) ? 'Aucun utilisateur' : `${this.users.length}`
      },
      ...mapState(["status", "user"]),
    },

    methods: {
    getAllUsers() {
      Axios.get('/user')
      .then(res => this.users = res.data)
      .catch(err => console.log(err))
    },

    deleteUsers(index) {
      alert("Cette fonctionnalité n'est pas encore disponible")
      // let userId = this.users[index]._id
      // if (
      //     window.confirm(
      //       "Cette fonctionnalité n'est pas encore disponible"
      //     )
      // ) 
      // Axios.delete('/user/'+userId)
      // .then(res => this.users.splice(index, 1))
      // .catch(err => console.log(err))
    }
  },

    mounted() {
      this.getAllUsers()
    },
}


</script>

<template >
  <section class="listusers card rounded border pb-2" >
    <div class="card-body text-center overflow-auto">
      <h5 class="pb-4">Liste des utilisateurs ({{ numberOfUsers }})</h5>
      <div class="mb-3 card cardusers pt-2" v-for="(user,index) in users" :key="user._id">
        <div class="del" @click="deleteUsers(index)">
          <font-awesome-icon class="trash" icon="fa-solid fa-trash-can" />
        </div>
        <div>
          <p>{{ user.firstName }} {{ user.lastName }}</p>
          <p>{{ user.email }} </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

.listusers {
  background-color: #D9D9D9;
  height: 400px;
}


.cardusers:hover {
  cursor: pointer;
  opacity: 0.8;
}

.trash{
  opacity: 0;
  position: absolute;
  padding: 10% 46%;
  font-size: 20px;
  right: 0px;
}

.trash:hover{
  opacity: 1;
}


@media (max-width: 768px) {
  .trash{
    padding: 5% 48%;
    right: 0px;
  }
}

@media (max-width: 480px) {
  .trash{
    padding: 7% 48%;
    right: 0px;
  }
}


</style>