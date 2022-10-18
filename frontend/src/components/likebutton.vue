<script>
export default {
    name: 'likebutton',

}
</script>

<template>

<section>

    <div class="card_button d-flex justify-content-end pt-2 m-3 border-top">
        <div class="card_button_likes d-flex">
                <font-awesome-icon class="fa-regular" icon="fa-regular fa-heart"/>
                <font-awesome-icon class="fa-solid" icon="fa-solid fa-heart"/>           
        </div>
        <span id="count">0</span>
    </div>

</section>

</template>

<style lang="scss">

.card_button {
    position:relative;
    &_likes svg{
        &.fa-solid {
            color: transparent;
        }
    background-color: transparent;
    border: none;
    font-size:20px;
    transition:200ms;
    position: absolute;
    right: 15px;
    top: 30%;
    }
    &_likes svg:hover{
        color:#FD2D01;
        cursor: pointer;
        // background: linear-gradient(#ee7724, #FD2D01, #dd3675, #b44593);
        // background-clip: text;
        // -webkit-background-clip: text;
        transform: scale(1.15);  
    }
}

</style>
