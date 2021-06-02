<template>
<div >Категории товаров</div>
<shop-header :tabs="tabs" background="BurlyWood" size="25px" text-align="center"></shop-header>
<router-view/>

</template> <!--внутри темплейта один корневвой элемент, остальные вкладываются в него (2 версися вью)-->

<script>
import ShopHeader from "@/components/ShopHeader";
export default {
//имя дается компоненту,если мы планируем использовать его в других компонентах-->
//компоненту добавляется темплейт, дата-->
    name: 'internetShop',
    components: {ShopHeader},
        data(){
        return{
            tabs: [
                {name: 'Процессоры', path: '/internetShop/catalog'},
                {name: 'Принтеры', path: '/internetShop/products'},
                {name: 'Мониторы', path: '/internetShop/products'}
                
            ]
        }
    }

}

</script>
//<!--стиль только этого компонента-->
<style scoped> 

</style>


