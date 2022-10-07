<script>
import axios from 'axios';

export default {
    name:'card',
    data() {
      return {
        posts : [],
      }    
  },
    methods: {
      getAllPosts() {
      axios.get('http://localhost:3000/api/post/home')
      .then(res => {
        this.posts = res.data
        console.log(res.data)
      })
      .catch(err => console.log(err))
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
<section v-for="post in posts" :key="post._id" class="bg-white border mt-2">    
  <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
    <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle shadow-2" style="width: 45px;" alt="Avatar" src="../assets/images/png-clipart-computer-icons-user-profile-avatar-avatar-heroes-monochrome.png">
        <div class="d-flex flex-column flex-wrap ml-2">
            <span class="font-weight-bold">Nom Prenom</span>
            <span class="text-black-50 time">40 minutes ago</span>
        </div>
    </div>
    <div class = "dropdown p-2">
        <div data-bs-toggle="dropdown">
        <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
        </div>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Modifier</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Supprimer</a></li>
        </ul>
    </div>
  </div>
  <div>
    <div class="p-2 px-3 pt-3"><h5>{{post.title}}</h5></div>
    <div class="p-2 px-3"><span>{{post.description}}</span></div>
    <div class="feed-image p-2 px-3"><img class="img-fluid img-responsive" src="">Image</div>                    
    <div class="d-flex justify-content-end like p-2 py-3">
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
  margin-right: 10px;
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
</style>