<script>

export default {
    name: 'likebutton',
    props: [
        'storeId',
        'isFavorited'
    ],
    data() {
        return {}
    },
    methods: {
        updateFaviteOption: function() {
        this.isFavorited = !this.isFavorited;
        }
    }
}

</script>

<template>
<button type="button" class="btn" @click.prevent="updateFaviteOption" :class="{ 'is-favorited': isFavorited }"><span class="fa fa-heart"></span></button>
</template>

<style>



   .fa {
      color: #d9d9d9;
      font-size: 20 px;
      transition: color 400 ms,
      transform 400 ms;
      opacity: 1;
   }
   .is-favorited.fa {
      opacity: 1;
      color: red;
      transform: scale(1.4);
   }

</style>
