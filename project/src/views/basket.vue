<template>
    <div  >{{ $route.params.id }}</div>
    <div>
    <p class="text" >{{products.description}}</p>
     <p class="text" >{{"Цена" + products.prise + "руб." }}</p>  
    </div>
</template>

<script>
//import {mapMutations} from 'vuex';
    export default {
    name: "basket",
    computed: {
        products(){
            return this.$store.getters.markSelect(this.$route.params.choose);
        }
    }
    }
</script>

<style scoped>

</style>