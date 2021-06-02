<template>
    <div>{{ $route.params.id }}</div>
     <h2>{{products.title.toUpperCase()}}</h2>
      <div>
        <img src="products.img">
    </div>
    <p>{{ products.description}}</p>
</template>

<script>
export default {
    name: "products",
    computed: {
        products(){
            return this.$store.getters.productsById(this.$route.params.id);
        }
    }
}
</script>

<style scoped>

</style>