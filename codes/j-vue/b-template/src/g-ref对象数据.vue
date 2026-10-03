<script setup lang="ts">
defineOptions({ name: 'App' })

import { ref } from 'vue'

let user = ref({ name: '张三', id: 100012 })
setTimeout(() => {
  user.value.name = '李四'
  user.value.id = 100020
}, 1500)

setTimeout(() => {
  user.value = { name: '王五', id: 100035 }
}, 3000)
</script>

<template>
  <h2>用户名: {{ user.name }}，用户ID: {{ user.id }}</h2>
</template>
