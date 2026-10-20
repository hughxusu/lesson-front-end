<script setup lang="ts">
import { ref, nextTick } from 'vue'

const count = ref(0)

async function increment() {
  count.value++
  console.log('DOM 还未更新:', document.getElementById('counter')?.textContent) // 0
  await nextTick()
  console.log('DOM 此时已经更新:', document.getElementById('counter')?.textContent) // 1
}
</script>

<template>
  <button id="counter" @click="increment">{{ count }}</button>
</template>
