<script setup lang="ts">
import { reactive } from 'vue'

let user = reactive({ name: '张三', id: 100012 })
console.log(user)
setTimeout(() => {
  user.name = '李四'
  user.id = 100020
}, 1500)
</script>

<template>
  <h2>用户名: {{ user.name }}，用户ID: {{ user.id }}</h2>
</template>
