<script>

export default {
    name: 'navbar',
    methods: {
        logout() {
            localStorage.removeItem('user')
        }
    }
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
                <div class="nav-item me-3 me-lg-0 d-flex justify-content-center align-items-center"  style="gap:10px">
                    <div class="d-flex align-items-center">
                        <router-link to="/admin/home">
                        <a>Accéder au compte admin</a>
                        </router-link>
                    </div>
                    <router-link to="/login">  |
                        <button 
                        type="button" 
                        class="btn btn-outline-light btn-sm"
                        @click="logout()">
                        Se deconnecter
                        </button>
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

a {
    text-decoration: none;
    color: black;
}

</style>