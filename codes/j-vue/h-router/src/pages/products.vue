<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'

const products = ref<{ id: number; title: string }[]>([])

const router = useRouter()
const showFirstProduct = () => {
  const first = products.value[0]
  if (!route.params.id && first) {
    router.replace({ name: 'product-detail', params: { id: first.id, name: first.title } })
  }
}

const route = useRoute()
watch(() => route.params.id, showFirstProduct)

onMounted(() => {
  axios.get('https://dummyjson.com/products?limit=10&skip=10&select=title').then((res) => {
    products.value = res.data.products
    showFirstProduct()
  })
})
</script>

<template>
  <div class="container">
    <h2>商品</h2>
    <hr />
    <div class="products">
      <ul>
        <li v-for="product in products" :key="product.id">
          <RouterLink
            replace
            :to="{ name: 'product-detail', params: { id: product.id, name: product.title } }"
          >
            <h3>{{ product.title }}</h3>
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
  .products {
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

        &.router-link-active h3 {
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
