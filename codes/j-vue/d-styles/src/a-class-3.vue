<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref(false);
</script>

<template>
  <button @click="isActive = !isActive">点击我</button>
  <p class="box" :class="{ big: isActive }">欲渡黄河冰塞川，将登太行雪满山。</p>
</template>

<style scoped>
.big {
  color: blue;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.box {
  background-color: pink;
  padding: 20px;
  border-radius: 5px;
}
</style>
