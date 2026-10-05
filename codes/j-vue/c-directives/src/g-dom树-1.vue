<script setup lang="ts">
import { reactive } from 'vue'

let users = reactive([
  { id: 10012, name: '张三' },
  { id: 10023, name: '李四' },
  { id: 10034, name: '王五' },
])

function modifyArray() {
  users.splice(1, 0, { id: 10045, name: '赵六' })
}
</script>

<template>
  <ul>
    <li v-for="(user, index) in users" :key="index">
      <input type="text" style="width: 100px" />
      用户名:{{ user.name }}
    </li>
  </ul>
  <button @click="modifyArray">添加元素</button>
</template>

<style scoped lang="less">
li {
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
