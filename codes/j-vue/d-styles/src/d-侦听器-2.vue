<script setup lang="ts">
import { ref, watch } from 'vue';
const counter = ref(0);

let stopCounter = watch(counter, (newVal) => {
  if (newVal > 5) {
    alert('关闭监听器');
    stopCounter();
  }
});
</script>

<template>
  <h2>当前计数: {{ counter }}</h2>
  <div>
    <button @click="counter++">计数+1</button>
    <button @click="counter--">计数-1</button>
  </div>
</template>

<style scoped lang="less">
div {
  display: flex;
  gap: 10px;
}
</style>
