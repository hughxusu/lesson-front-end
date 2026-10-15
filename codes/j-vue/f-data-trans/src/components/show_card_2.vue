<script setup lang="ts">
defineProps(['title'])
</script>

<template>
  <div class="card">
    <slot name="title"></slot>
    <hr />
    <slot name="content"></slot>
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
