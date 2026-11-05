<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()

const recipe = reactive<any>({})

const fetchRecipe = (id: string) => {
  if (!id) return
  axios.get(`https://dummyjson.com/recipes/${id}`).then((res) => {
    Object.assign(recipe, res.data)
  })
}

watch(
  () => route.query.id,
  (id) => fetchRecipe(id as string),
  { immediate: true },
)
</script>

<template>
  <div class="container">
    <h2>食谱详情 - {{ route.query.name }}</h2>
    <img height="300" :src="recipe.image" :alt="recipe.name" />
    <div class="instructions" ß>
      <p v-for="(instruction, index) in recipe.instructions" :key="index">{{ instruction }}</p>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  padding: 20px;
  width: 100%;
  height: 800px;
  img {
    margin-top: 20px;
  }
  .instructions {
    margin-top: 20px;

    p {
      margin-top: 5px;
      font-size: 18px;
    }
  }
}
</style>
