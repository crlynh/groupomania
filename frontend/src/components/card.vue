<script>
import Axios from 'axios';

import likebutton from './likebutton.vue'
import moment from 'moment/min/moment-with-locales'
import 'moment/locale/fr'

export default {
    name:'card',
    components: {
      likebutton,
    },
    data() {
      return {
        posts : [],
        userCanUpdate : true,
      };    
    },

    methods: {
      dateTime(createAt) {
      moment.locale('fr');
        return moment(createAt).startOf('second').fromNow(createAt);
      },

      isUserCanUpdate(){
        const userId = this.$store.state.user.userId
        const postUserId = this.posts[0].post._id
        if (userId == postUserId) {
            this.userCanUpdate = true
          } else {
            this.userCanUpdate = false
          }          
      },

      getAllPosts() {
        const token = this.$store.state.user.token
        const userId = this.$store.state.user.userId
        Axios.get('http://localhost:3000/api/post/home', {
					headers: {
						['Authorization']: `Basic ${token}`,
						"Content-Type": "multipart/form-data"            
					},            
        })
          .then(res => {
            this.posts = res.data,
            console.log(this.posts)
          })
          .catch(err => console.log(err))
      }, 

      deletePost(index) {
      const token = this.$store.state.user.token;
      let postId = this.posts[index].post._id
      if (
          window.confirm(
            "Êtes-vous sûr de vouloir supprimer cette publication ?"
          )
      ) 
      Axios.delete('http://localhost:3000/api/post/'+postId, {
					headers: {
						['Authorization']: `Basic ${token}`,
					},        
      })
      .then(res => this.posts.splice(index, 1))
      .catch(err => alert("Vous n'avez pas les droits pour supprimer cette publication"))
      },

      editPost(postId) {
        const token = this.$store.state.user.token;
        const userId = this.$store.state.user.userId
        Axios.get('http://localhost:3000/api/post/'+postId, {
          headers: {
            ['Authorization']: `Basic ${token}`,
          },   
        })
        .then(res => {
        this.posts.userId = res.data.userId
        })
        .catch(err => console.log(err))

        if ( this.posts.userId == userId ) { 
          return alert("Vous n'avez pas les droits pour modifier cette publication")     
        } else {
          return this.$router.push({name:'editPost', params: {id: postId}})
        }
      },

    },
    mounted() {
      this.getAllPosts()
    },
}


</script>

<template>
<main>
<!------------------- Publication Card ------------------->
<section 
  v-for="(post, index) in posts" :key="post._id"
  class="bg-white border mt-2">   
  <div class="d-flex flex-row justify-content-between align-items-center p-2">
    <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle shadow-2" style="width: 45px;" alt="Avatar" src="../assets/images/png-clipart-computer-icons-user-profile-avatar-avatar-heroes-monochrome.png">
        <div class="d-flex flex-column flex-wrap ml-2">
            <span class="font-weight-bold">{{post.user.prenom}} {{post.user.nom}}</span>
            <span class="text-black-50 time">Posté il y a {{ dateTime(post.post.createAt) }}</span>
        </div>
    </div>
    <button class = "dropdown p-2 btn btn-lg" v-if="post.user._id = post.post._id">
        <div data-bs-toggle="dropdown">
        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical"/>
        </div>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item edit" 
            @click="editPost(post.post._id)">Modifier</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item"
            @click="deletePost(index)"> Supprimer </a></li>
        </ul>
    </button>
  </div>
  <div>
    <div class="p-2 px-3 pt-3"><h5>{{post.post.title}}</h5></div>
    <div class="p-2 px-3"><span>{{post.post.description}}</span></div>
    <div class="imageUrlContainer" v-if="post.post.imageUrl">
        <div>
          <div class="feed-image p-2 px-3">
            <img class="onlyimageUrl"
            :src="`http://localhost:3000/images/${post.post.imageUrl}`"
            alt = "image du post"/> 
          </div>   
        </div>
    </div>
    <likebutton></likebutton>

  </div>
</section>
<!------------------- Publication Card ------------------->
</main>
</template>

<style>

.feed-image img {
  width: 100%;
  height: auto
}

.feed-text {
  gap: 10px;
}

.dropdown {
  cursor: pointer;
}
.dropdown-menu li {
  position: relative;
}
.dropdown-menu .dropdown-submenu {
  display: none;
  position: absolute;
  left: 100%;
  top: -7px;
}
.dropdown-menu .dropdown-submenu-left {
  right: 100%;
  left: auto;
}

.imageUrlContainer {
  display: flex;
  padding: 10px;
  margin: 10px;
  max-width: 100%;
  min-height: 200px;
  background-color: transparent;
  border-radius: 4px;
}
</style>