<script>
<<<<<<< HEAD
import Axios from '../store/caller.axios';
=======
import Axios from '../store/caller.axios'
>>>>>>> 833d01da785b73cccc14a7ba0624ed0ca2f0caa5
import jwt_decode from "jwt-decode"

import moment from 'moment/min/moment-with-locales'
import 'moment/locale/fr'

export default {
    name:'card',
    components: {
    },

    data() {
      return {
        posts : [],
      };    
    },

    methods: {
      dateTime(createAt) {
      moment.locale('fr');
        return moment(createAt).startOf('second').fromNow(createAt);
      },

      getUserData() {
        const token = this.$store.state.user.token
        const decoded = jwt_decode(token)
        this.users = decoded
        return this.users
      },

      getAllPosts() {
        const token = this.$store.state.user.token
        Axios.get('/post/home', {
					headers: {
						['Authorization']: `Basic ${token}`,
						"Content-Type": "multipart/form-data"            
					},            
        })
          .then(res => this.posts = res.data)
          .catch(err => console.log(err))
      }, 

      editPost(postId) {
        const token = this.$store.state.user.token;
        const userId = this.$store.state.user.userId
        Axios.get('/post/'+postId, {
          headers: {
            ['Authorization']: `Basic ${token}`,
          },   
        })
        .then(res => {
        this.posts.userId = res.data.userId
        })
        .catch(err => console.log(err))

        if (this.posts.userId == userId) { 
          return alert("Vous n'avez pas les droits pour modifier cette publication")     
        } else {
          return this.$router.push({name:'editPost', params: {id: postId}})
        }
      },

      deletePost(index) {
      const token = this.$store.state.user.token;
      let postId = this.posts[index].post._id
      if (
          window.confirm(
            "Êtes-vous sûr de vouloir supprimer cette publication ?"
          )
      ) 
<<<<<<< HEAD
      Axios.delete('/post/'+postId, {
=======
      Axios.delete('post/'+postId, {
>>>>>>> 833d01da785b73cccc14a7ba0624ed0ca2f0caa5
					headers: {
						['Authorization']: `Basic ${token}`,
					},        
      })
      .then(res => this.posts.splice(index, 1))
      .catch(err => alert("Vous n'avez pas les droits pour supprimer cette publication"))
      },

      addLikes(index) {
        const token = this.$store.state.user.token  
        const userId = this.$store.state.user.userId 
        let postId = this.posts[index].post._id
        let liked = 1 
        if (this.posts[index].post.usersLiked.includes(userId)=== true) {
          liked = -1
        }
          Axios.post('/post/like', {
            userId: userId,
            _id: postId,
            likes: liked
          }, {
            headers: {
              ['Authorization']: `Basic ${token}`,
            },
          })
          .then(res => {
            this.isLiked = res.data
            this.getAllPosts();       

          })
          .catch(err => (console.log(err)))
        }
},

    mounted() {
      this.getAllPosts()
      this.getUserData()
    }

}

</script>

<template>
<main>
<!------------------- Publication Card ------------------->
<section 
  v-for="(post, index) in posts" :key="post._id"
  class="bg-white border mt-2">   
  <div class="d-flex flex-row justify-content-between align-items-center p-3">
    <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle shadow-2" style="width: 45px;" alt="Avatar" src="../assets/images/png-clipart-computer-icons-user-profile-avatar-avatar-heroes-monochrome.png">
        <div class="d-flex flex-column flex-wrap ml-2">
<<<<<<< HEAD
            <span class="font-weight-bold">{{post.user.firstName}} {{post.user.lastName}}</span>
=======
            <span class="font-weight-bold">{{ post.user.firstName }} {{ post.user.lastName }}</span>
>>>>>>> 833d01da785b73cccc14a7ba0624ed0ca2f0caa5
            <span class="text-black-50 time">Posté il y a {{ dateTime(post.post.createAt) }}</span>
        </div>
    </div>
    <button class= "dropdown p-2 btn btn-lg"  v-if="post.user._id === this.$store.state.user.userId || this.getUserData().role === 1">
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
          <div class="feed-image">
            <img class="onlyimageUrl"
            :src="`http://localhost:3000/images/${post.post.imageUrl}`"
            alt = "image du post"/> 
          </div>   
        </div>
    </div>

    <div class="card_button pt-3 border-top">
      <div class="card_button_likes d-flex justify-content-end align-items-center" @click="addLikes(index)">
        <font-awesome-icon v-if="post.post.usersLiked.includes(this.$store.state.user.userId)" class="fa-solid one red" icon="fa-solid fa-heart"/>
        <font-awesome-icon v-else class="fa-solid two grey" icon="fa-solid fa-heart"/>
        <span class="count" id="count" data-count="0">{{post.post.likes}}</span> 
      </div>
    </div>

  </div>
</section>
<!------------------- Publication Card ------------------->
</main>
</template>

<style lang="scss">

.feed-image img {
  width: 100%;
  height: auto;
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
  margin: 10px 0px;
  max-width: 100%;
  min-height: 200px;
  background-color: transparent;
  border-radius: 4px;
}

.onlyimageUrl {
  padding: 10px 0px;
}

.card_button {
    margin: 20px 15px 15px 15px;
    position: relative;
    &_likes svg{
        &.one{
            font-size: 20px;
            margin: 17px;
        }
    cursor: pointer;
    margin-right: 16px;
    position: absolute;
    background-color: transparent;
    border: none;
    font-size:22px;
    transition:200ms;
    }
}

.red {
  color: #FD2D01;
}

.grey {
  color: #d9d9d9;
}

</style>