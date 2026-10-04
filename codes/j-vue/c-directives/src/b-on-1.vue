<script setup lang="ts">
import { ref } from 'vue'

let counter = ref(0)
function decrement() {
  counter.value--
}
function add(value: number = 1) {
  counter.value += value
}
</script>

<template>
  <h2>当前计数: {{ counter }}</h2>
  <div class="btns">
    <button v-on:click="counter++">+1</button>
    <button v-on:click="decrement">-1</button>
    <button @click="add(5)">+5</button>
  </div>
</template>

<style scoped lang="less">
.btns {
  display: flex;
  align-items: center;
  button {
    margin: 0 5px;
    font-size: 24px;
  }
}
</style>
