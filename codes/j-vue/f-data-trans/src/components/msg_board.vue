<script setup lang="ts">
import { reactive, onUnmounted } from 'vue'
import emitter from '@/utils/emitter'

let msgs = reactive<string[]>([])

emitter.on('send-msg', (msg: string) => {
  msgs.push(msg)
})

onUnmounted(() => {
  emitter.off('send-msg')
})
</script>

<template>
  <h3>消息板</h3>
  <div class="no-msg" v-show="msgs.length === 0">当前没有消息！</div>
  <ul class="msg">
    <li v-for="(msg, index) in msgs" :key="index">{{ msg }}</li>
  </ul>
</template>

<style scoped lang="less">
.msg {
  li {
    font-size: 18px;
  }
}

.no-msg {
  font-size: 18px;
}
</style>
