<script setup lang="ts">
import { reactive } from 'vue'

let user = reactive({ name: '张三', id: 100012 })

setTimeout(() => {
  user = { name: '李四', id: 100020 }
  // Object.assign(user, { name: '李四', id: 100020 })
  console.log(user)
}, 1500)
</script>

<template>
  <h2>用户名: {{ user.name }}，用户ID: {{ user.id }}</h2>
</template>
