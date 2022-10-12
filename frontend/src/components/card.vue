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
        userCanUpdate : false,
      };    
    },

    computed: {
      // ...mapState(["status", "user"]),
      // canDeletePost() {
      //   const userId = this.$store.state.user.userId;
      //   console.log(posts.userId)
      //   const admin = this.$store.state.user.Admin
      //   if (this.post.userId !== userId  && admin == false) {
      //     return false;
      //   } else {
      //     return true;
      //   }
      // }
      fileExtension() {
      if (this.posts.file == null) {
        let extensionType = "";
        return extensionType;
      }

      let extension = this.posts.file.split(".")[1];
      let extensionType = "";
      switch (extension) {
        case "jpg":
          extensionType = "image";
          break;
        case "jpeg":
          extensionType = "image";
          break;
        case "png":
          extensionType = "image";
          break;
        case "gif":
          extensionType = "gif";
          break;
        default:
          null;
      }
      return extensionType;
    },

    },

    methods: {
      dateTime(createAt) {
      moment.locale('fr');
        return moment(createAt).startOf('second').fromNow(createAt);
      },

      isUserCanUpdate(id){
        const userId = this.$store.state.user.userId
        if (userId == this.posts) {
            this.userCanUpdate = true
          } else {
            this.userCanUpdate = false
          }          
      },

      getAllPosts() {
        const token = this.$store.state.user.token
        Axios.get('http://localhost:3000/api/post/home', {
					headers: {
						['Authorization']: `Basic ${token}`,
					},            
        })
          .then(res => 
          {this.posts = res.data
            // this.posts.forEach((post,i)=> {
            //   this.posts[i].user = this.getOneUserName(this.posts)
            //   console.log(res.data)
            // });
          })
          .catch(err => console.log(err))
      }, 

      getOneUserName() {
        const token = this.$store.state.user.token
        const userId = this.$store.state.user.userId
        let userPostNom = "";
        let userPostPrenom = "";
        Axios.get('http://localhost:3000/api/user/' + userId, {
					headers: {
						['Authorization']: `Basic ${token}`,
					},        
        })
        .then(res => {
          userPostNom = res.data.nom
          userPostPrenom = res.data.prenom
        })
        .catch(err => console.log(err))
      
        return {
          nom : userPostNom,
          prenom : userPostPrenom
        }
      },


      deletePost(index) {
      const token = this.$store.state.user.token;
      let postId = this.posts[index]._id
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
        console.log(userId)
        Axios.get('http://localhost:3000/api/post/'+postId, {
          headers: {
            ['Authorization']: `Basic ${token}`,
          },   
        })
        .then(res => {
        this.posts.userId = res.data.userId
        console.log(this.posts.userId)
        })
        .catch(err => console.log(err))

        if ( this.posts.userId  == userId ) { 
          return alert("Vous n'avez pas les droits pour modifier cette publication")     
        } else {
          return this.$router.push({name:'editPost', params: {id: postId}})
        }
      }

    },
    mounted() {
      this.getAllPosts()
      this.getOneUserName()
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
            <span class="font-weight-bold">{{post.userId}}</span>
            <span class="text-black-50 time">Posté il y a {{ dateTime(post.createAt) }}</span>
        </div>
    </div>
    <div class = "dropdown p-2" @focusout="isUserCanUpdate()" v-if="userCanUpdate == false">
        <div data-bs-toggle="dropdown">
        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
        </div>
        <ul class="dropdown-menu" >
            <li><a class="dropdown-item edit" 
            @click="editPost(post._id)">Modifier</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item"
            @click="deletePost(index)"> Supprimer </a></li>
        </ul>
    </div>
  </div>
  <div>
    <div class="p-2 px-3 pt-3"><h5>{{post.title}}</h5></div>
    <div class="p-2 px-3"><span>{{post.description}}</span></div>
    <div class="feed-image p-2 px-3" v-if="fileExtension == 'image'">
      <img class="mediaContainer"
      :src="post.file"
      alt="image du post"/>
    </div>                    
    <div class="d-flex justify-content-end like pt-3 m-3 border-top">
      <!-- <div class="thumbs1" ><font-awesome-icon icon="fa-solid fa-thumbs-up"/></div> -->
      <div class="thumbs2"><font-awesome-icon icon="fa-regular fa-thumbs-up"/></div>
      <span id="count">0</span>
    </div>
  </div>
</section>
<!------------------- Publication Card ------------------->
</main>
</template>

<style>


.like{
  font-size: 20px;
  cursor: pointer;
  display: none;
}

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

.mediaContainer {
  border: solid black
}
</style>