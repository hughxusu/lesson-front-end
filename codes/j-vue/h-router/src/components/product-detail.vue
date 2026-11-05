<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="container">
    <h2>商品详情</h2>
    <p>商品ID: {{ route.params.id }}</p>
    <p>商品名称: {{ route.params.name }}</p>
  </div>
</template>

<style scoped lang="less">
.container {
  padding: 20px;
  width: 100%;
  height: 800px;
  background-color: white;
}
</style>
