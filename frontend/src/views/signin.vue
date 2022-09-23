<script>

import { mapState } from 'vuex'

export default {
    name: 'SignIn',
    data: function() {
      return {
        mode:'login',
        nom: '',
        nomError: '',
        prenom: '',
        prenomError: '',
        email: '',
        emailError:'',
        password: '',
        passwordError:'',
        reg: /^[a-zA-Z ,.'-]+$/gim,
        regEmail: /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/gim,
        regPassword: /^(?=.*\d).{8,}$/gim,


      }
    },
    computed: {
      validatedFields: function() {
        if (this.mode == 'signup') {
          if (this.nom != "" && this.prenom != "" && this.email != "" && this.password != "") {
            return true;
          } else {
            return false;
          }
        } else {
          if (this.email != "" && this.password != "") {
            return true
          } else {
            return false
          }
        }
      },
      ...mapState(['status'])      
    },
    methods: {
      switchToSignUp: function() {
        this.mode = 'signup';
      },
      switchToLogin: function() {
        this.mode = 'login';
      },
      isNomValid() {
        if (this.reg.test(this.nom)) {
          this.nomError = false;
        } else {
          this.nomError = true;
        }
      },
      isPrenomValid() {
        if (this.reg.test(this.prenom)) {
          this.prenomError = false;
        } else {
          this.prenomError = true;
        }
      },      
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
      login: function() {
        const self = this;
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        }).then(function(){
          self.$router.push('/home');
        }, function(error){
          console.log(error)
        })
      },
      signup: function() {
        const self = this;
        this.$store.dispatch('signup', {
          nom: this.nom,
          prenom: this.prenom,
          email: this.email,
          password: this.password,
        }).then (function(response) {
          console.log(response);
          self.login();
        }).error(function(error) {
          console.log(error)
        })
        }
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
            <div class="fw-bold text-center">
              <h2>Bienvenue sur</h2>
              <img class= "mb-5" src="../assets/logo/icon-left-font-monochrome-black.png" style="width: 230px;" alt="Logo_Groupomania">
            </div>
            
            <form>
              <h4 class="text-secondary mb-4" v-if="mode=='login'">CONNEXION</h4>
              <h4 class="text-secondary mb-4" v-if="mode=='signup'">INSCRIPTION</h4>

                <!-- SIGNUP ONLY - 2 column grid layout with text inputs for the first and last names -->
                <div class="row" v-if="mode=='signup'">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input 
                        v-model="nom" 
                        type="text" 
                        id="form3Example1" 
                        class="form-control" 
                        placeholder="Nom"
                        @focusout="isNomValid"
                        />
                        <p class="font-italic" v-if="nomError">Veuillez renseigner votre nom</p>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input 
                        v-model="prenom" 
                        type="text" 
                        id="form3Example2" 
                        class="form-control" 
                        placeholder="Prénom" 
                        @focusout="isPrenomValid"
                        />
                        <p class="font-italic" v-if="nomError">Veuillez renseigner votre prénom</p>
                    </div>
                  </div>
                </div>
                
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input 
                  v-model="email" 
                  type="email" 
                  id="form3Example3" 
                  class="form-control" 
                  placeholder="Adresse email"
                  @focusout="isEmailValid"
                  />
                <p class="font-italic" v-if="emailError">Veuillez renseigner une adresse email correcte</p>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input 
                  v-model="password" 
                  type="password" 
                  id="form3Example4" 
                  class="form-control"
                  autocomplete="on" 
                  placeholder="Mot de passe"
                  @focusout="isPasswordValid"
                />
                <p class="font-italic" v-if="passwordError">Votre mot de passe doit contenir au moins 8 caractères dont une majuscule et un chiffre</p>                  
              </div>

              <!-- Submit button -->
                    <button :disabled="!validatedFields" v-if="mode=='login'" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-5" type="button" >
                      <span v-if="status == 'loading'">Connexion en cours...</span>
                      <span v-else>Se connecter</span>
                    </button>
                    <button @click="signup" :disabled="!validatedFields" class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-5" type="button" v-if="mode=='signup'">S'inscrire</button>
                    <p class="form-row" v-if="status == 'error_login'">Adresse ou mot de passe incorect</p>
                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2" v-if="mode=='login'">Vous n'avez pas encore de compte ?</p>
                    <p class="mb-0 me-2" v-if="mode=='signup'">Vous avez déjà un compte ?</p>
                    <!-- <router-link to="/signup"> -->
                        <button type="button" class="btn btn-outline-danger" @click="switchToSignUp" v-if="mode=='login'">Inscrivez-vous</button>
                        <button type="button" class="btn btn-outline-danger" @click="switchToLogin" v-if="mode=='signup'">Connectez-vous</button>
                    <!-- </router-link> -->
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