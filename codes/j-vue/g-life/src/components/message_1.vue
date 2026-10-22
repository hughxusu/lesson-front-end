<script setup lang="ts">
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

onMounted(() => {
  console.log('Message1 mounted')
})

onUnmounted(() => {
  console.log('Message1 unmounted')
})

onActivated(() => {
  console.log('Message1 activated')
})

onDeactivated(() => {
  console.log('Message1 deactivated')
})
</script>

<template>
  <div>
    <h3>新嫁娘词</h3>
    <p>三日入厨下，</p>
    <p>洗手作羹汤。</p>
    <p>未谙姑食性，</p>
    <p>先遣小姑尝。</p>
  </div>
</template>

<style scoped lang="less">
div {
  border: 1px solid #000;
  padding: 0 12px;
  display: inline-block;
}
</style>
