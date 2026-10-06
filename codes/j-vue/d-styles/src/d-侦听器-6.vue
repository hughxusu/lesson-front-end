<script setup lang="ts">
import { reactive, watch } from 'vue';
const counter = reactive({ a: 0, sub: { b: 0, c: 0 } });

watch(counter.sub, (newVal, oldVal) => {
  console.log(
    `oldVal: b-${oldVal.b}, c-${oldVal.c}, newVal: b-${newVal.b}, c-${newVal.c}`,
  );
});

// watch(
//   () => counter.sub,
//   (newVal, oldVal) => {
//     console.log(
//       `oldVal: b-${oldVal.b}, c-${oldVal.c}, newVal: b-${newVal.b}, c-${newVal.c}`,
//     );
//   },
// );

// watch(
//   () => counter.sub,
//   (newVal, oldVal) => {
//     console.log(
//       `oldVal: b-${oldVal.b}, c-${oldVal.c}, newVal: b-${newVal.b}, c-${newVal.c}`,
//     );
//   },
//   { deep: true },
// );

function bPlus() {
  counter.sub.b++;
}

function cPlus() {
  counter.sub.c++;
}

function allPlus() {
  counter.sub = { b: counter.sub.b + 1, c: counter.sub.c + 1 };
}
</script>

<template>
  <h2>b: {{ counter.sub.b }} c: {{ counter.sub.c }}</h2>
  <div>
    <button @click="bPlus">b+1</button>
    <button @click="cPlus">c+1</button>
    <button @click="allPlus">all-b-c+1</button>
  </div>
</template>

<style scoped lang="less">
div {
  display: flex;
  gap: 10px;
}
</style>
