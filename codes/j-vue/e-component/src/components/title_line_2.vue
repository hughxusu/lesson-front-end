<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('由来征战地，不见有人还。')

defineExpose({
  msg,
})
</script>

<template>
  <h2>{{ msg }}</h2>
</template>
