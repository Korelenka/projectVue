<template>
    <div>{{ $route.params.category }}</div>
   <div v-for="item in getMonitor" :key="item.id">
     <div>
                <img :src="require('@/assets/' + item.img)">
            </div> 
   </div>
     <!-- <h2>{{products.title.toUpperCase()}}</h2> -->
      
      
    <!-- <p>{{ products.description}}</p> -->
</template>

<script>
export default {
    name: "monitor",
    computed: {
        products(){
            return this.$store.getters.productsById(this.$route.params.category);
        }
    }
}
</script>

<style scoped>

</style>