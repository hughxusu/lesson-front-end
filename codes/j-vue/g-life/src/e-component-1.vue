<script setup lang="ts">
import { ref } from 'vue'
import Message1 from '@/components/message_1.vue'
import Message2 from '@/components/message_2.vue'

type MessageKey = keyof typeof massages
const currentMessage = ref<MessageKey>('Message1')

const massages = {
  Message1,
  Message2,
}
</script>

<template>
  <button v-for="(_, index) in massages" :key="index" @click="currentMessage = index">
    显示{{ index }}
  </button>
  <hr />
  <component :is="massages[currentMessage]" />
</template>

<style scoped lang="less">
button {
  margin-right: 12px;
}
</style>
