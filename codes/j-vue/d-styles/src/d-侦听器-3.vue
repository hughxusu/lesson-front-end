<script setup lang="ts">
import { ref, watch } from 'vue';
const counter = ref({ a: 0, b: 0 });

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

// watch(
//   counter,
//   (newVal, oldVal) => {
//     if (!oldVal) {
//       console.log(`oldVal: ${oldVal}, newVal: a-${newVal.a}, b-${newVal.b}`);
//     } else {
//       console.log(
//         `oldVal: a-${oldVal.a}, b-${oldVal.b}, newVal: a-${newVal.a}, b-${newVal.b}`,
//       );
//     }
//   },
//   { deep: true, immediate: true },
// );

function aPlus() {
  counter.value.a++;
}

function bPlus() {
  counter.value.b++;
}

function all() {
  let { a, b } = counter.value;
  counter.value = { a: a + 1, b: b + 1 };
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
