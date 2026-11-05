import { createRouter, createWebHistory } from 'vue-router'
import Recipes from '@/pages/recipes.vue'
import Todos from '@/pages/todos.vue'
import User from '@/pages/user.vue'
import Products from '@/pages/products.vue'
import RecipeDetail from '@/components/recipe-detail.vue'
import ProductDetail from '@/components/product-detail.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/user',
    },
    {
      path: '/user',
      component: User,
    },
    {
      name: 'todos',
      path: '/todos',
      component: Todos,
    },
    {
      name: 'recipes',
      path: '/recipes',
      component: Recipes,
      children: [
        {
          name: 'recipe-detail',
          path: 'detail',
          component: RecipeDetail,
        },
      ],
    },
    {
      name: 'products',
      path: '/products',
      component: Products,
      children: [
        {
          name: 'product-detail',
          path: 'detail/:id/:name',
          component: ProductDetail,
        },
      ],
    },
  ],
})

export default router
