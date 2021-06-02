<template>
<nav :style="{backgroundColor: background}">
    <router-link v-for="tab in tabs" :key="tab.path"
    :to="tab.path" :style="{fontSize: size}">
    {{tab.name}}
    </router-link>
</nav>

</template> <!--внутри темплейта один корневвой элемент, остальные вкладываются в него (2 версися вью)-->

<script> 

export default{
  name: 'ShopHeader',
  props: {
      background: String,
      tabs: Array,
      size: String
}
}
</script>
//<!--стиль только этого компонента-->
<style scoped> 
nav {
    display: flex;
    justify-content: space-around;
}
nav a {
    flex: 1;
    text-decoration: none;
    padding: 16px;
}
.router-link-active {/*стили для активной вкладки*/
    background-color: Khaki;
}

</style>