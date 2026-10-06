<script setup lang="ts">
let item = {
  id: 1,
  name: '锅包肉',
  price: 32.5,
}
</script>

<template>
  <div>
    <h3>{{ item.name }}</h3>
    <p>价格：{{ item.price }}</p>
  </div>
</template>

<style scoped>
div {
  padding: 30px;
  border-radius: 10px;
  background-color: #f5f5f5;
  width: 300px;
  margin: 0 auto;
}
</style>
