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
</script>

<template>
<main class="home">

<navbar></navbar>

<div class="container mt-4 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-8">
            <div class="feed p-2">
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
                <card></card>
                <card></card>
            </div>
        </div>
    </div>
</div>

<footerpage></footerpage>
</main>
</template>

<style>
.home {
  background-color:#eee
  }

.gradient-custom-2 {
background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
--bs-btn-border-color: none;
}

</style>