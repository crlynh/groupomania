<script>
import Navbar from '../components/navbar.vue'

export default {
    name: 'HomePage',
    components: {
        Navbar,
    }
}
</script>

<template>
<main>

<navbar></navbar>

<section style="background-color: #eee;">

  <div class="container my-5 py-5">
    <div class="row d-flex justify-content-center">

              <div class="card-footer py-3 border-0">
            <div class="d-flex flex-start w-100">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="avatar" width="40"
                height="40" />
              <div class="form-outline w-100">
                <textarea class="form-control" id="textAreaExample" rows="4"
                  style="background: #fff;"></textarea>
              </div>
            </div>
            <div class="float-end mt-2 pt-1">
              <button type="button" class="btn btn-danger btn-sm">
                Post comment
              </button>
            </div>
          </div>

      <div class="col-md-12 col-lg-10 col-xl-8">
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-start align-items-center">
              <img class="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="avatar" width="60"
                height="60" />
              <div>
                <h6 class="fw-bold text-danger mb-1">
                  Jean Dupont
                </h6>
                <p class="text-muted small mb-0">
                  Shared publicly - Jan 2020
                </p>
              </div>
            </div>

            <p class="mt-3 mb-4 pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              consequat.
            </p>

            <div class="small d-flex justify-content-start">
              <a href="#!" class="d-flex align-items-center me-3">
                <i class="far fa-thumbs-up me-2"></i>
                <p class="mb-0">Like</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</main>
</template>

<style></style>