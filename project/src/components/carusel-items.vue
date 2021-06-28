<template>
    <div class="carusel-items">
    <img :src=" require ('../assets/ ')" >
</div>
</template>

<script>

export default {
    name: "carusel-items",
    
    props: {
        item_data: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {}
    },
    computed: {}
}
</script>
<style scoped>
</style>