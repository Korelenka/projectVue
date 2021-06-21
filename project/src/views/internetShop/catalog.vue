<template>
    catalog
     <div v-for="products in Monitor" :key="products.id">
        <h2>{{products.title}}</h2>
        <router-link :to="{name: 'products', params: {id: products.id}}">Открыть</router-link>
    
    </div>
    <router-view/> 
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
    name: "catalog",
    computed: {

        ...mapGetters(['prod'])
    }
    }
</script>

<style scoped>

</style>