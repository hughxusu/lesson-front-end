<script setup lang="ts">
defineOptions({ name: 'App' })

import { reactive, toRefs } from 'vue'

let user = reactive({ name: '张三', id: 100012 })
let { name, id } = toRefs(user)
// let { name, id } = user

setTimeout(() => {
  name.value = '李四'
  id.value = 100020
  // name = '李四'
  // id = 100020
  // console.log(name, id)
}, 1500)
</script>

<template>
  <h2>用户名: {{ name }}，用户ID: {{ id }}</h2>
</template>
