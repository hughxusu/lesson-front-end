<script setup lang="ts">
import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

onMounted(() => {
  console.log('Message2 mounted')
})

onUnmounted(() => {
  console.log('Message2 unmounted')
})

onActivated(() => {
  console.log('Message2 activated')
})

onDeactivated(() => {
  console.log('Message2 deactivated')
})
</script>

<template>
  <div>
    <h3>秋夜寄邱员外</h3>
    <p>怀君属秋夜，</p>
    <p>散步咏凉天。</p>
    <p>空山松子落，</p>
    <p>幽人应未眠。</p>
  </div>
</template>

<style scoped lang="less">
div {
  border: 1px solid #000;
  padding: 0 12px;
  display: inline-block;
}
</style>
