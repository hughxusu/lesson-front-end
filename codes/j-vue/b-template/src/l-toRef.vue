<script setup lang="ts">
import { reactive, toRef } from 'vue'

let user = reactive({ name: '张三', id: 100012 })
let name = toRef(user, 'name')

setTimeout(() => {
  name.value = '李四'
}, 1500)
</script>

<template>
  <h2>用户名: {{ name }}</h2>
</template>
