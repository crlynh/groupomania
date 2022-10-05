<script>

export default {
    name: 'adminnavbar'
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
                <div class="nav-item me-3 me-lg-0 d-flex align-items-center" style="gap:10px">
                    <div class="d-flex align-items-center" >
                    Bienvenue sur le profil administrateur
                    </div> 
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

.dropdown {
cursor: pointer;
}
.dropdown-menu li {
position: relative;
}
.dropdown-menu .dropdown-submenu {
display: none;
position: absolute;
left: 100%;
top: -7px;
}
.dropdown-menu .dropdown-submenu-left {
right: 100%;
left: auto;
}

</style>