<script setup lang="ts">
import { reactive } from 'vue'

const users = reactive([
  { id: 10012, name: '张三' },
  { id: 10023, name: '李四' },
  { id: 10034, name: '王五' },
])
</script>

<template>
  <div class="card">
    <slot :users="users"></slot>
  </div>
</template>

<style scoped lang="less">
.card {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
  height: 320px;
  display: inline-block;
}
</style>
