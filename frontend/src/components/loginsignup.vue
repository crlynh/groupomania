<script>

export default {
    name: 'Home',
    data: function() {
      return {
        mode:'login',
      }
    },
    methods: {
      switchToSignUp: function() {
        this.mode = 'signup';
      },
      switchToLogin: function() {
        this.mode = 'login';
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

                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row" v-if="mode=='signup'">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input v-model="nom" type="text" id="form3Example1" class="form-control" placeholder="Nom"/>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <input v-model="prenom" type="text" id="form3Example2" class="form-control" placeholder="Prénom" />
                    </div>
                  </div>
                </div>
                
              <!-- Email input -->
              <div class="form-outline mb-4">
                <input v-model="mail" type="email" id="form3Example3" class="form-control" placeholder="Adresse mail"/>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input v-model="password" type="password" id="form3Example4" class="form-control" placeholder="Mot de passe"/>
              </div>

              <!-- Submit button -->
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-5" type="button" v-if="mode=='login'">Se connecter</button>
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-5" type="button" v-if="mode=='signup'">S'inscrire</button>
                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2" v-if="mode=='login'">Vous n'avez pas encore de compte ?</p>
                    <p class="mb-0 me-2" v-if="mode=='signup'">Vous avez déjà un compte ?</p>
                    <!-- <router-link to="/signup"> -->
                        <button type="button" class="btn btn-outline-danger" @click="switchToSignUp" v-if="mode=='login'">Inscrivez-vous</button>
                        <button type="button" class="btn btn-outline-danger" @click="switchToLogin" v-if="mode=='signup'">Inscrivez-vous</button>
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

.cascading-right {
  margin-right: -50px;
}

@media (max-width: 991.98px) {
  .cascading-right {
    margin-right: 0;
  }
}

</style>