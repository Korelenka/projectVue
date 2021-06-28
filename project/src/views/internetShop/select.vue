<template>
    <div  >{{ $route.params.id }}</div>
    <div>
    <p class="text" >{{products.description}}</p>
     <p class="text" >{{"Цена" + products.prise + "руб." }}</p>  
    </div>
  <carousel>
    <slide v-for="slide in products.slide" :key="slide"><img  :src="require('@/assets/' + slide.img)"></slide>
    <template #addons>
      <navigation />
    </template>
  </carousel>
    <!-- <a :href= "`/product/${slide.id}`" class ="buttom">Заказать</a> -->
    <td>
                  <button @click='selectProducts(products)' class="buttom">Купить</button>
               </td>
               <div></div>
</template>

<script>
   import 'vue3-carousel/dist/carousel.css';
   import { Carousel, Slide, Navigation } from 'vue3-carousel';
   import {mapMutations} from 'vuex';
    export default {
    name: "products",
    computed: {
        products(){
            return this.$store.getters.productsById(this.$route.params.id);
        }
    },
    components: {
    Carousel,
    Slide,
    Navigation,
  },
  
    methods: {     
    ...mapMutations(['selectProducts(products)']),
    
  
    }
    }
</script>

<style scoped>
.card{
      
      height:auto;
      padding: 15px 60px;
      width: 130px;
      
         }
  .block{
      text-align: left;
      padding: 2rem;
      flex-grow: 1;
      display: flex;
   }
    .text{
      text-align: left;
      padding: 15px 60px;
      width: 1000px;
      font-size: 1.5rem;
      text-decoration: none;
        }
    .buttom {
     text-decoration: none;
  display: inline-block;
  padding: 12px 40px;
  margin: 10px 20px;
  border-radius: 30px;
  background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
  transition: .5s;
    }
</style>
