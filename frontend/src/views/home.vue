<script>
import navbar from '../components/navbar.vue'

export default {
    name: 'home',
    components: {
        navbar,
    }
}
</script>

<template>
<main>

<navbar></navbar>

<div class="container mt-4 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-8">
            <div class="feed p-2">
                <div class="d-flex d-flex justify-content-between  p-2 bg-white border">
                                      <div class="feed-text px-2">
                        <h6 class="text-black-50 mt-2">Quoi de neuf ?</h6>
                    </div>        
              <button type="button" class="btn btn-danger btn-sm">
                + Ajouter un nouveau post
              </button>
                </div>
                <div class="bg-white border mt-2">
                    <div>
                        <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                            <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle" src="../assets/images/png-clipart-computer-icons-user-profile-avatar-avatar-heroes-monochrome.png" width="45">
                                <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">Thomson ben</span><span class="text-black-50 time">40 minutes ago</span></div>
                            </div>
                            <div class="feed-icon px-2"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical" /></div>
                        </div>
                    </div>
                    <div class="p-2 px-3"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                    <div class="feed-image p-2 px-3"><img class="img-fluid img-responsive" src="../assets/images/png-clipart-computer-icons-user-profile-avatar-avatar-heroes-monochrome.png"></div>                    
                    <div class="d-flex justify-content-end socials p-2 py-3"><font-awesome-icon icon="fa-solid fa-thumbs-up" /></div>
                </div>
            </div>
        </div>
    </div>
</div>

</main>
</template>

<style>
body {
  background-color:#eee
  }

.time {
  font-size: 9px !important
  }

.socials {
  margin-right: 14px;
  font-size: 20px;
  color: #d2c8c8;
  cursor: pointer
  }

.feed-image img {
  width: 100%;
  height: auto
  }

.feed-text {
  gap: 10px;
}

</style>