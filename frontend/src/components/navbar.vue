<script>

export default {
    name: 'navbar'
}

</script>

<template>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark">
    <!-- Container wrapper -->
    <div class="container-fluid d-flex justify-content-between flex-row">
        <div>
            <!-- Navbar brand -->
            <router-link to="/home">
                <img src="../assets/logo/icon-left-font-monochrome-white.png" height="60" alt="MDB Logo" loading="lazy" />
            </router-link>
        </div>

        <div>
                <div class="nav-item me-3 me-lg-0 d-flex justify-content-center align-items-center">
                    <a class="navbar-brand">
                        <img src="../assets/images/png-clipart-computer-icons-user-profile-avatar-avatar-heroes-monochrome.png" class="rounded-circle shadow-4" height="25" alt="Black and White Portrait of a Man" loading="lazy" />
                    </a>
                    <router-link to="/login">
                        <button type="button" class="btn btn-outline-light btn-sm">Se deconnecter</button>
                    </router-link>
                </div>
        </div>
    </div>
</nav>

</template>

<style>

.navbar {
    background-color: #4E5166;
}

</style>