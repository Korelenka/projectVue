<template>

    <div  >{{ $route.params.category }}</div>
   <div  v-for="item in  products" :key="item.id">
       <h2>{{item.title}}</h2>
       <div>
                <img class="card" :src="require('@/assets/' + item.img)">
            </div> 
            <!--<p class="text" >{{item.description}}</p>-->
       <a :href= "`/product/${item.id}`" class ="buttom">Подробнее</a>
     
   </div>
     <!-- <h2>{{products.title.toUpperCase()}}</h2> -->
      
      
    <!-- <p>{{ products.description}}</p> -->
</template>

<script>
export default {
    name: "products",
    computed: {
        products(){
            return this.$store.getters.getProductByCategory(this.$route.params.category);
        }
    }
//     ,
//     computed: {
//     products(){
//         return this.$store.getters.getProductByCategory(this.$route.params.category);
//      }
// }
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