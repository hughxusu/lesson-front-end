<script setup lang="ts">
import emitter from '@/utils/emitter'

function sendMsg(e: KeyboardEvent) {
  e.preventDefault()
  if (e.target instanceof HTMLInputElement) {
    const msg = e.target.value.trim()
    if (!msg) {
      return
    }

    emitter.emit('send-msg', msg)
    e.target.value = ''
  }
}
</script>

<template>
  <input type="text" @keyup.enter="sendMsg" placeholder="请输入消息" />
</template>

<style scoped lang="less">
input {
  padding: 5px 10px;
  font-size: 18px;
}
</style>
