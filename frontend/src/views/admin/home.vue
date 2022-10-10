<script>
import navbar from '../../components/navbar.vue'
import footerpage from '../../components/footer.vue'
import card from '../../components/card.vue'

export default {
    name: 'home',
    components: {
        navbar,
        card,
        footerpage,
    }
    
}
</script>>

<template>
<main>
<navbar></navbar>

        <div class="border-bottom m-4 d-flex flex-row align-items-center" style="gap:50px">
                        <router-link to="/home" class="link-secondary"> 
            <font-awesome-icon icon="fa-solid fa-arrow-left" class="mb-3" />
            </router-link>
    		<h1 class="mb-4">Bienvenue sur le profil administrateur</h1>
        </div>

<router-link to="users/edit">
    <button type="button" class="btn btn-outline-danger m-4" >VOIR LA LISTE DE TOUS LES UTILISATEURS</button>
</router-link>
<footerpage></footerpage>
</main>
</template>

<style>

</style>