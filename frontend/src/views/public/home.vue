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

      scrollToTop() {
        window.scrollTo(0, top);
      }
    },

  mounted() {
    this.getUserData()
  }
}
</script>

<template>
<main class="home">

<!------------ loading spinner ------------>
    <div class="loading">
        <div class="loading_loader">
          <svg class="loading_loader_spin" viewBox="25 25 50 50">
            <circle class="loading_loader_spin_circle" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
          </svg>
        </div>
      </div>

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
<div class="bloc-button btn btn-d scrollToTop" @click.native="scrollToTop()">
  <font-awesome-icon icon="fa-chevron-up"/>
</div>
<!-- ScrollToTop Button END-->

<footerpage></footerpage>
</main>
</template>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

body {
  font-family: 'Lato', sans-serif;
  animation-duration: 3s;
}

.loading {
    position: absolute;
    position: fixed;
    height: 100vh;
    inset: 0;
    background-color: white;
    opacity: 0.8;
    z-index: 2;
    animation: disappear 1.8s forwards;
    pointer-events: none;
&_loader {
    position: relative;
    margin: 0 auto;
    width: 100px;
    &:before {
      content: '';
      display: block;
      padding: 350px;
    }
    &_spin {
        animation: rotate 2s linear infinite;
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        inset: 0;
        margin: auto;
        &_circle {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        animation: dash 1s ease-in-out infinite, color 3s ease-in-out infinite;
        stroke-linecap: round;
        }
    }
  }
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124px;
  }
}
@keyframes color {
  0% {
    stroke: #ee7724;
  }
  33% {
    stroke: #d8363a;
  }
  90% {
    stroke: #dd3675;
  }
}
@keyframes disappear {
  90% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}

.home {
  background-color:#eee
  }

.gradient-custom-2 {
background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
--bs-btn-border-color: none;
}

.scrollToTop {
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 500;
    & svg {
      font-size: 15px
    }
}

.btn-d,
.btn-d:hover,
.btn-d:focus {
    color: #FFF;
    background: rgba(0, 0, 0, .3);
}

@media (min-width: 320px) and (max-width: 768px) {
  .allcards {
    display: flex;
    flex-direction: column;
  }
}

</style>