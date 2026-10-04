<script setup lang="ts">
let user = {
  id: 10012,
  name: '张三',
  phone: '13800000000',
  email: 'zhangsan@example.com',
}
</script>

<template>
  <ul>
    <li v-for="(value, key) in user" :key="key">{{ key }}: {{ value }}</li>
  </ul>
</template>

<style scoped lang="less">
li {
  font-size: 20px;
  font-weight: bold;
}
</style>
