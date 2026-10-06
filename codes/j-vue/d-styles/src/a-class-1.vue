<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref(false);
</script>

<template>
  <button @click="isActive = !isActive">点击我</button>
  <p :class="{ big: isActive }">金樽清酒斗十千，玉盘珍羞直万钱。</p>
</template>

<style scoped>
.big {
  color: blue;
  font-size: 24px;
  font-weight: bold;
}
</style>
