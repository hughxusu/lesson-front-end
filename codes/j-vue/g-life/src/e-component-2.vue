<script setup lang="ts">
import { ref } from 'vue'

import Message1 from '@/components/message_1.vue'
import Message2 from '@/components/message_2.vue'

const massages = {
  Message1,
  Message2,
}

type MessageKey = keyof typeof massages

const currentMessage = ref<MessageKey>('Message1')
</script>

<template>
  <button v-for="(item, index) in massages" :key="index" @click="currentMessage = index">
    显示{{ index }}
  </button>
  <hr />
  <KeepAlive>
    <component :is="massages[currentMessage]" />
  </KeepAlive>
</template>

<style scoped lang="less">
button {
  margin-right: 12px;
}
</style>
