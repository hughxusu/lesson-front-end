<script setup lang="ts">
let msg = '<strong>莫听穿林打叶声，</strong>何妨吟啸且徐行。'
</script>

<template>
  <p v-html="msg"></p>
  <p v-text="msg"></p>
</template>

<style scoped lang="less">
p {
  font-size: 20px;
}
</style>
