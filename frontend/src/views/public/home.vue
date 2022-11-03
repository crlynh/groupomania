<script>
import navbar from '../../components/navbar.vue'
import footerpage from '../../components/footer.vue'
import card from '../../components/card.vue'
import profilecard from '../../components/profilecard.vue'
import userscard from '../../components/userscard.vue'

import jwt_decode from "jwt-decode"

export default {
    name: 'home',
    components: {
        navbar,
        profilecard,
        card,
        footerpage,
        userscard,
    },
    methods: {
      getUserData() {
        const token = this.$store.state.user.token
        const decoded = jwt_decode(token)
        this.users = decoded
        return this.users
      },

      scrollToTarget() {
        let mybutton = document.getElementById("btn-back-to-top");
        if (
    document.body.scrollTop > 10 ||
    document.documentElement.scrollTop > 10
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  mybutton.addEventListener("click", backToTop);

      }
    },

    backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
},

  mounted() {
    this.getUserData()
  }

}
</script>

<template>
<main class="home">

<navbar></navbar>

<div class="container mt-4 mb-5">
  <div class="d-flex justify-content-between allcards">
    <div class="container d-flex flex-column pb-4">
      <profilecard></profilecard>
      <userscard v-if="this.getUserData().role === 1"></userscard>
    </div>
    
    <div class="col-md-8">
      <div class="feed">
        <div class="d-flex justify-content-between align-items-center p-2 bg-white border">
          <div class="feed-text px-2">
            <h6 class="text-black-50 mt-2">Quoi de neuf ?</h6>
          </div>
          <router-link to="/createpost">        
            <button type="button" class="btn btn-danger gradient-custom-2  btn-sm">
              <font-awesome-icon icon="fa-solid fa-plus" />
                  Nouvelle publication
            </button>
          </router-link>
        </div>
        <card></card>
      </div>
    </div>
  </div>
</div>

<!-- ScrollToTop Button -->
<button
        type="button"
        class="btn btn-danger btn-floating btn-lg"
        id="btn-back-to-top"
        @click="scrollToTarget()"
        >
  <i class="fas fa-arrow-up"></i>
</button>
<!-- ScrollToTop Button END-->

<footerpage></footerpage>
</main>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

body {
  font-family: 'Lato', sans-serif;
}

.home {
  background-color:#eee
  }

.gradient-custom-2 {
background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
--bs-btn-border-color: none;
}

#btn-back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
}


@media (min-width: 320px) and (max-width: 768px) {
  .allcards {
    display: flex;
    flex-direction: column;
  }
}

</style>