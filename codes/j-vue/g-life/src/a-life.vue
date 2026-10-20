<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/header.vue'

const flag = ref(false)

const handleClick = () => {
  flag.value = !flag.value
}
</script>

<template>
  <button @click="handleClick">点击我</button>
  <Header v-if="flag" />
</template>

<style scoped></style>
