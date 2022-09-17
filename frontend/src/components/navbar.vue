<script>

export default {
    name: 'Navbar'
}

</script>

<template>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <!-- Container wrapper -->
    <div class="container-fluid d-flex justify-content-between flex-row">
        <div>
            <!-- Navbar brand -->
            <a class="navbar-brand" href="#">
                <img src="../assets/logo/icon-left-font-monochrome-white.png" height="60" alt="MDB Logo" loading="lazy" />
            </a>
        </div>

        <div>
                <div class="nav-item me-3 me-lg-0 d-flex justify-content-center align-items-center">
                    <a class="navbar-brand">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" height="25" alt="Black and White Portrait of a Man" loading="lazy" />
                    </a>
                    <router-link to="/login">
                        <button type="button" class="btn btn-outline-light btn-sm">Se deconnecter</button>
                    </router-link>
                </div>
        </div>
    </div>
</nav>

</template>

<style></style>