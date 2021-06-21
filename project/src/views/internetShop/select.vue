<template>
    select
</template>

<script>
   
    export default {
    name: "prod",
    computed: {
        products(){
            return this.$store.getters.getProductByCategory(this.$route.params.category);
        }
    }
    }
</script>

<style scoped>

</style>