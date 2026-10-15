<script setup lang="ts">
defineProps(['title'])
</script>

<template>
  <div class="card">
    <h3>{{ title || '默认标题' }}</h3>
    <hr />
    <div class="content">
      <slot>内容显示为空</slot>
    </div>
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

  h3 {
    font-size: 22px;
    margin: 0 0 10px 0;
    padding: 0;
    text-align: center;
    background-color: #f0f0f0;
  }

  .content {
    padding: 10px;
  }
}
</style>
