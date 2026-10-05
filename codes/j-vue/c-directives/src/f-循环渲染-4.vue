<script setup lang="ts">
import { reactive } from 'vue'

let users = reactive([
  { id: 10012, name: '张三' },
  { id: 10023, name: '李四' },
  { id: 10034, name: '王五' },
])

function reverseArray() {
  users.reverse()
}

function modifyArray() {
  if (users && users.length > 0) {
    users[0]!.name += '~'
  }
}

function sliceArray() {
  if (users && users.length > 0) {
    console.log(users.slice(0, 1))
  }
}
</script>

<template>
  <ul>
    <li v-for="user in users" :key="user.id">用户ID:{{ user.id }}，用户名:{{ user.name }}</li>
  </ul>
  <div class="btn-group">
    <button @click="reverseArray">翻转</button>
    <button @click="modifyArray">修改</button>
    <button @click="sliceArray">截取</button>
  </div>
</template>

<style scoped lang="less">
li {
  font-size: 20px;
  font-weight: bold;
}

.btn-group {
  display: flex;
  justify-content: left;
  gap: 10px;
  button {
    padding: 5px 10px;
    font-size: 18px;
  }
}
</style>
