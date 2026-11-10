<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'

import axios from 'axios'

const recipes = ref<any>([])

const router = useRouter()
const showFirstRecipe = () => {
  const first = recipes.value[0]
  if (!route.query.id && first) {
    router.replace({ name: 'recipe-detail', query: { id: first.id, name: first.name } })
  }
}

const route = useRoute()
watch(() => route.query.id, showFirstRecipe)

onMounted(() => {
  axios.get('https://dummyjson.com/recipes?limit=10&skip=0&select=name').then((res) => {
    recipes.value = res.data.recipes
    showFirstRecipe()
  })
})
</script>

<template>
  <div class="container">
    <h2>食谱</h2>
    <hr />
    <div class="recipes">
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id">
          <RouterLink
            :class="{ active: route.query.id === String(recipe.id) }"
            :to="{ path: '/recipes/detail', query: { id: recipe.id, name: recipe.name } }"
          >
            <h3>{{ recipe.name }}</h3>
          </RouterLink>
        </li>
      </ul>
      <div class="detail">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  padding: 20px;
  h2 {
    margin-bottom: 20px;
  }
  .recipes {
    display: flex;
    align-items: top;
    gap: 20px;
    ul {
      margin-top: 20px;
      list-style-type: none;
      padding: 0;
      flex: 0 0 400px;
      height: 600px;
      overflow: auto;
      overflow-x: hidden;
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: black;

        &.active h3 {
          color: blue;
        }
      }

      li {
        margin-bottom: 10px;
        border: 1px solid #aaa;
        padding: 5px;
        border-radius: 5px;
      }
    }

    .detail {
      margin-top: 20px;
      flex: 1;
      min-width: 0;
    }
  }
}
</style>
