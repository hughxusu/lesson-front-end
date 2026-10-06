<script setup lang="ts">
import { ref } from 'vue';
const fontSize = ref('18');
</script>

<template>
  <input type="text" v-model="fontSize" />
  <p :style="{ color: 'blue', fontSize: fontSize + 'px', fontWeight: 'bold' }">
    闲来垂钓碧溪上，忽复乘舟梦日边。
  </p>
</template>
