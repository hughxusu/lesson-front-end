<script setup lang="ts">
import { ref } from 'vue';

const input1 = ref(0);
const input2 = ref(0);
const input3 = ref(0);
</script>

<template>
  <div>
    <input type="text" v-model.number="input1" />
    <input type="text" v-model.number="input2" />
    <input type="text" v-model.number="input3" />
  </div>
  <p>输入的数字总和为: {{ input1 + input2 + input3 }}</p>
</template>

<style scoped lang="less">
div {
  display: flex;
  gap: 10px;
}
</style>
