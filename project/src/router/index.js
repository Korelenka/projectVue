
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/shop',
    component: () => import('../views/Shop.vue'),
    
    children: [
      {
        path: 'catalog', 
        component: () => import('../views/internetshop/catalog.vue'),
        children: [
          {
            name: 'products', 
            path: 'products/:id', 
            component: () => import('../views/internetshop/products.vue') 
          }
        ]
      }
    
  ]
}
  ,
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
