<template>
 <shop-header :background="background" :tabs="tabs" size="18px"></shop-header> <!--3-->
 <div>
   <router-view/>
 </div>
</template>

<script>

//чтобы подключить один компонент в другой, выполняются три пункта - import,components-будем использовать, library-header - само использование

import ShopHeader from "@/components/ShopHeader"; //1
export default {
  components: {ShopHeader}, //2
  data() {
    return {
      tabs: [
        {name: 'Авторизация', path: '/authorization'},
        {name: 'Каталог продукции', path: '/shop'},
        {name: 'Корзина', path: '/basket'}
      ],
      background: "LightCyan"
    }
  }
}
</script>


<style>
#app {
  
  color: #2c3e50;
}


</style>