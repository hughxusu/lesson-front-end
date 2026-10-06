<script setup lang="ts">
import { reactive, watchEffect } from 'vue';
const counter = reactive({ a: 0, sub: { b: 0, c: 0 } });

watchEffect(() => {
  console.log(counter.a, counter.sub);
  if (counter.a > 5) {
    alert('a大于5了');
    counter.a = 5;
  }

  if (counter.sub.b > 5) {
    alert('b大于5了');
    counter.sub.b = 5;
  }
});

function aPlus() {
  counter.a++;
}

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
  <h2>a: {{ counter.a }} b: {{ counter.sub.b }} c: {{ counter.sub.c }}</h2>
  <div>
    <button @click="aPlus">a+1</button>
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
