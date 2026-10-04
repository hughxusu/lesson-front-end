<script setup lang="ts">
let users = [
  { id: 10012, name: '张三' },
  { id: 10023, name: '李四' },
  { id: 10034, name: '王五' },
]
</script>

<template>
  <ul>
    <li v-for="(user, index) in users" :key="user.id">
      序号:{{ index + 1 }}，用户名:{{ user.name }}
    </li>
  </ul>
</template>

<style scoped lang="less">
li {
  font-size: 20px;
  font-weight: bold;
}
</style>
