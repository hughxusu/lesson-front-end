<script setup lang="ts">
import { ref } from 'vue'

let user = ref({ name: '张三', id: 100012 })
console.log(user)
</script>

<template>
  <h2>用户名: {{ user.name }}，用户ID: {{ user.id }}</h2>
</template>
