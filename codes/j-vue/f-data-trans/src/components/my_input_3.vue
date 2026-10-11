<script setup lang="ts">
defineOptions({ name: 'MyInput' })

const modelValue = defineModel()
</script>

<template>
  <input type="text" v-model="modelValue" placeholder="请输入消息" />
</template>

<style scoped lang="less">
input {
  padding: 5px 20px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0px;

  &:focus {
    outline: none;
    border: 2px solid #007bff;
    border-radius: 5px;
  }
}
</style>
