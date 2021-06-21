
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/shop',
    component: () => import('../views/Shop.vue'),
    
    children: [
      {
        path: 'catalog/:category', 
        component: () => import('../views/internetshop/products.vue'),
        // children: [
        //   {
        //     name: 'products', 
        //     path: 'products/:id', 
        //     component: () => import('../views/internetshop/products.vue') 
        //   }
        // ]
      }
    
  ]
}
  ,
  {
    path: '/product/:id',
    component: () => import('../views/internetshop/select.vue')
  },
  {
    path: '/authorization',
    component: () => import('../views/Authorization.vue')
    
  },
    
  {
    path: '/basket',
    component: () => import('../views/basket.vue')
    
  }


]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
