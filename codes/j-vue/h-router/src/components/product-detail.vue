<script setup lang="ts">
import { reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const product = reactive<any>({})

const route = useRoute()
const fetchProduct = (id: string) => {
  if (!id) return
  axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
    Object.keys(product).forEach((k) => delete product[k])
    Object.assign(product, res.data)
    console.log(product)
  })
}

watch(
  () => route.params.id,
  (id) => fetchProduct(id as string),
  { immediate: true },
)
</script>

<template>
  <div class="container">
    <h2>商品详情 - {{ product.title }}</h2>
    <div class="images">
      <img v-for="(url, index) in product.images" :key="index" :src="url" :alt="product.title" />
    </div>
    <div class="description">
      <p>{{ product.description }}</p>
      <h3>价格: ${{ product.price }}</h3>
      <h3>库存: {{ product.rating }}</h3>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  padding: 20px;
  width: 100%;
  height: 800px;

  .images {
    display: flex;
    gap: 16px;
    margin-top: 20px;

    img {
      height: 180px;
    }
  }

  .description {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 18px;

    p {
      font-size: 18px;
      width: 800px;
    }
  }
}
</style>
