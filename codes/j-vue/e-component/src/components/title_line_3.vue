<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('')

function changeMsg(parent: any) {
  msg.value = parent.sentence
}

defineExpose({
  msg,
})
</script>

<template>
  <h2>{{ msg }}</h2>
  <button @click="changeMsg($parent)">修改</button>
</template>
