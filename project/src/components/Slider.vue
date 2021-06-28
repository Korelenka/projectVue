<template>
    <div id="slider" >
<carusel>
    :carusel_data="sliderItems"
</carusel>
    </div>
    
   
</template>

<script>
   import carusel from 'Caruusel';
    export default {
    name: "slider",
    components: {
        carusel
    },
     data(){
      return {
          sliderItems: [
            {img:'proc3.png', id: 1}, 
            {img:'proc4.png', id: 2},
            {img:'proc5.png', id: 3},
            {img:'proc6.png', id: 4},
            {img:'monitor3.png', id: 5},
            {img:'monitor4.png', id: 6},
            {img:'monitor5.png', id: 7},
            {img:'monitor6.png', id: 8},
            {img:'print3.png', id: 9},
            {img:'print4.png', id: 10},
            {img:'print5.png', id: 11},
            {img:'print6.png', id: 12}
          ]
      } 
    }
    }
</script>