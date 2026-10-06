<script setup lang="ts">
import { reactive, watch } from 'vue';
const counter = reactive({ a: 0, sub: { b: 0, c: 0 } });

watch(
  () => counter.a,
  (newVal, oldVal) => {
    console.log(`oldVal: a-${oldVal}, newVal: a-${newVal}`);
  },
);

function aPlus() {
  counter.a++;
}
</script>

<template>
  <h2>a: {{ counter.a }}</h2>
  <div>
    <button @click="aPlus">a+1</button>
  </div>
</template>

<style scoped lang="less">
div {
  display: flex;
  gap: 10px;
}
</style>
