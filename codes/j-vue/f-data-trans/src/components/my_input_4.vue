<script setup lang="ts">
defineOptions({ name: 'MyInput' })

const name = defineModel('name')
const pwd = defineModel('pwd')
</script>

<template>
  <div>
    <input type="text" v-model="name" placeholder="请输入用户名" />
    <input type="password" v-model="pwd" placeholder="请输入密码" />
  </div>
</template>

<style scoped lang="less">
div {
  display: flex;
  gap: 10px;
}

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
