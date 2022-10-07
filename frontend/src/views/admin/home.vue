<script>
import adminNavbar from '../../components/adminNavbar.vue'
import footerpage from '../../components/footer.vue'
import card from '../../components/card.vue'

export default {
    name: 'home',
    components: {
        adminNavbar,
        card,
        footerpage,
    }
    
}
</script>>

<template>
<main>
<adminNavbar></adminNavbar>
<router-link to="users/edit">
    <button type="button" class="btn btn-outline-danger" >EDIT USER</button>
</router-link>
<router-link to="post/edit">
    <button type="button" class="btn btn-outline-danger" >EDIT POST</button>
</router-link>
<footerpage></footerpage>
</main>
</template>

<style>

</style>