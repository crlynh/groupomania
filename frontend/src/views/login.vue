<script>
import { mapState } from 'vuex'

export default {
    name: 'login',
    data: function() {
      return {
        mode:'login',
        email: '',
        emailError:'',
        password: '',
        passwordError:'',
        regEmail: /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/gim,
        regPassword: /^(?=.*\d).{8,}$/gim,
      }    
  },
    computed: {
      validatedFields() {
          if (this.email !== "" && this.password !== "" && this.emailError !== true && this.passwordError !== true) {
            return true
          } else {
            return false
          }
        },
      ...mapState(['status'])      
    },
    methods: {
      isEmailValid() {
        if (this.email !== "" && this.regEmail.test(this.email)) {
          this.emailError = false;
        } else {
          this.emailError = true;
        }
      },
      isPasswordValid() {
        if (this.password !== "" && this.regPassword.test(this.password)) {
          this.passwordError = false;
        } else {
        this.passwordError = true;
        }  
      },   
      
      handleSubmit() {
        const self = this;
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
          }).then ((response) => {
          console.log(response);
          self.$router.push('/home');
        }, function(error) {
          console.log(error)
        })
        },
    }
} 

</script>

<template>
<main>

<!-- Section: Design Block -->
<div class="container py-4">
    <div class="row g-0 align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="card cascading-right" style="
            background: hsla(0, 0%, 100%, 0.55);
            backdrop-filter: blur(30px);
            ">
          <div class="card-body p-5 shadow-5">
            <div class = text-center>
              <h2 class="fw-bold">Bienvenue sur</h2>
              <img class= "mb-5" src="../assets/logo/icon-left-font-monochrome-black.png" style="width: 200px;" alt="Logo_Groupomania">
            </div>
            <form @submit="handleSubmit">
            <h4 class="text-secondary mb-4">CONNEXION</h4>
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input 
                  v-model="email"
                  type="email" 
                  id="form3Example3" 
                  class="form-control" 
                  placeholder="Adresse mail"
                  @focusout="isEmailValid"/>
                <p class="font-italic" v-if="emailError">Veuillez renseigner une adresse email correcte</p>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input 
                  v-model="password"
                  type="password" 
                  id="form3Example4" 
                  class="form-control" 
                  placeholder="Mot de passe"
                  @focusout="isPasswordValid"/>
                <p class="font-italic" v-if="passwordError">Votre mot de passe doit contenir au moins 8 caractères dont une majuscule et un chiffre</p>
              </div>

              <!-- Submit button -->
                    <button 
                    :disabled="!validatedFields" 
                    class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-5" 
                    :class="{'button-disabled' : !validatedFields}"
                    type="button"
                    @click="handleSubmit()"
                    v-if="mode == 'login'">
                        <span v-if="status == 'loading'"> Connexion en cours...</span>
                        <span v-else>Se connecter</span>
                    </button>
                                <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Vous n'avez pas encore de compte ? </p>
                    <router-link to="/signup">
                        <button type="button" class="btn btn-outline-danger" >Inscrivez-vous</button>
                    </router-link>
                  </div>

            </form>
          </div>
        </div>
      </div>
            <div class="col-lg-6 mb-5 mb-lg-0 d-none d-lg-block d-xl-block"> 
        <img src="../assets/logo/icon.500ae8c5.png" class="w-100 rounded-4 shadow-4"
          alt="" />
            </div>
    </div>
  </div>

</main>
</template>


<style>

.gradient-custom-2 {
background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
--bs-btn-border-color: none;
}

@media (min-width: 768px) {
  .cascading-right {
    margin-right: -100px;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .cascading-right {
    margin: 50px;
  }
}

</style>