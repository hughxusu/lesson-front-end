<script setup lang="ts">
import { ref, watch } from 'vue';
const counter = ref(0);

watch(counter, (newVal, oldVal) => {
  console.log('计数变化了', newVal, oldVal);
  if (newVal > 5) {
    alert('计数不能超过5');
    counter.value = oldVal;
  }
});
</script>

<template>
  <h2>当前计数: {{ counter }}</h2>
  <button @click="counter++">计数+1</button>
</template>
