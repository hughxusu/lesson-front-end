<script setup lang="ts">
import { ref, computed } from 'vue';

const input1 = ref(0);
const input2 = ref(0);
const input3 = ref(0);

const total = computed(() => {
  console.log('computed');
  return input1.value + input2.value + input3.value;
});

function calculateTotal() {
  console.log('function');
  return input1.value + input2.value + input3.value;
}
</script>

<template>
  <div>
    <input type="text" v-model.number.lazy="input1" />
    <input type="text" v-model.number.lazy="input2" />
    <input type="text" v-model.number.lazy="input3" />
  </div>
  <p>输入的数字总和为: {{ total }}</p>
  <p>输入的数字总和为: {{ total }}</p>
  <p>输入的数字总和为: {{ calculateTotal() }}</p>
  <p>输入的数字总和为: {{ calculateTotal() }}</p>
</template>

<style scoped lang="less">
div {
  display: flex;
  gap: 10px;
}
</style>
