<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  onBeforeUpdate,
  onUpdated,
  ref,
} from 'vue'

const count = ref(0)

console.log('header组件setup了')

onBeforeMount(() => {
  console.log('header组件挂载前')
})

onMounted(() => {
  console.log('header组件挂载完成')
})

onBeforeUnmount(() => {
  console.log('header组件卸载前')
})

onUnmounted(() => {
  console.log('header组件卸载完成')
})

onBeforeUpdate(() => {
  console.log('header组件更新前')
})

onUpdated(() => {
  console.log('header组件更新完成')
})
</script>

<template>
  <h1>{{ count }}</h1>
  <button @click="count++">Add 1</button>
</template>

<style scoped></style>
