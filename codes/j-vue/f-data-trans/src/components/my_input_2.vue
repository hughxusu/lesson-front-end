<script setup lang="ts">
defineOptions({ name: 'MyInput' })

defineProps(['name', 'pwd'])
const emit = defineEmits(['update:name', 'update:pwd'])

function sendNameMsg(e: InputEvent) {
  emit('update:name', (e.target as HTMLInputElement).value)
}

function sendPwdMsg(e: InputEvent) {
  emit('update:pwd', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div>
    <input type="text" :value="name" placeholder="请输入用户名" @input="sendNameMsg" />
    <input type="password" :value="pwd" placeholder="请输入密码" @input="sendPwdMsg" />
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
