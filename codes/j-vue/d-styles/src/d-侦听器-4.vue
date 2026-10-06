<script setup lang="ts">
import { reactive, watch } from 'vue';
const counter = reactive({ a: 0, b: 0 });

watch(counter, (newVal, oldVal) => {
  console.log(
    `oldVal: a-${oldVal.a}, b-${oldVal.b}, newVal: a-${newVal.a}, b-${newVal.b}`,
  );
});

// watch(
//   counter,
//   (newVal, oldVal) => {
//     console.log(
//       `oldVal: a-${oldVal.a}, b-${oldVal.b}, newVal: a-${newVal.a}, b-${newVal.b}`,
//     );
//   },
//   { deep: true },
// );

function aPlus() {
  counter.a++;
}

function bPlus() {
  counter.b++;
}

function all() {
  let { a, b } = counter;
  Object.assign(counter, { a: a + 1, b: b + 1 });
}
</script>

<template>
  <h2>a: {{ counter.a }} b: {{ counter.b }}</h2>
  <div>
    <button @click="aPlus">a+1</button>
    <button @click="bPlus">b+1</button>
    <button @click="all">all+1</button>
  </div>
</template>

<style scoped lang="less">
div {
  display: flex;
  gap: 10px;
}
</style>
