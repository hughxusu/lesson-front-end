import { createRouter, createWebHistory } from 'vue-router'
import Recipes from '@/pages/recipes.vue'
import Todos from '@/pages/todos.vue'
import User from '@/pages/user.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/recipes',
    },
    {
      path: '/recipes',
      component: Recipes,
    },
    {
      path: '/todos',
      component: Todos,
    },
    {
      path: '/user',
      component: User,
    },
  ],
})

export default router
