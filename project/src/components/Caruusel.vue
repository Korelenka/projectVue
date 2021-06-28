<template>
    <div class="carusel"></div>
    <carusel-items
    
    v-for="sliderItems in carusel_data" 
    :key="sliderItems.id"
    item_data = "sliderItems"
    
    
    />
</template>

<script>
import caruselItems from 'carusel-items'
export default {
    name: "carusel",
    components: {
        caruselItems
    },
    props: {
        carusel_data: {
            type: Array,
            default: () => []
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