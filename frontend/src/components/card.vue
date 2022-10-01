<script>
export default {
    name:'card'
}
</script>

<template>
<!------------------- Publication Card ------------------->
<div class="bg-white border mt-2">
    <div>
        <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
            <div class="d-flex flex-row align-items-center feed-text px-2"><img class="rounded-circle shadow-2" style="width: 45px;" alt="Avatar" src="../assets/images/png-clipart-computer-icons-user-profile-avatar-avatar-heroes-monochrome.png">
                <div class="d-flex flex-column flex-wrap ml-2"><span class="font-weight-bold">Thomson ben</span><span class="text-black-50 time">40 minutes ago</span></div>
            </div>
            <div class = "dropdown p-2">
                <div data-bs-toggle="dropdown">
                <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
                </div>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Modifier</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Supprimer</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="p-2 px-3"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
    <div class="feed-image p-2 px-3"><img class="img-fluid img-responsive" src="../assets/images/png-clipart-computer-icons-user-profile-avatar-avatar-heroes-monochrome.png"></div>                    
    <div class="d-flex justify-content-end like p-2 py-3">
        <div class="thumbs1"><font-awesome-icon icon="fa-solid fa-thumbs-up"/></div>
        <!-- <div class="thumbs2"><font-awesome-icon icon="fa-regular fa-thumbs-up"/></div> -->
    </div>
</div>
<!------------------- Publication Card ------------------->
</template>

<style>
.like {
background-color:transparent;
margin-right: 10px;
font-size: 20px;
color: pink;
cursor: pointer;
-webkit-transition: 200ms;
transition: 200ms;
}

/* .thumbs1 {
color: transparent;
}

.like:hover {
color: transparent;
background-clip: text;
-webkit-background-clip: text;
background-image: linear-gradient(to right, #ee7724, #FD2D01, #dd3675, #b44593);
transform: scale(1.05);
cursor: pointer;
}  */

.feed-image img {
width: 100%;
height: auto
}

.feed-text {
gap: 10px;
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