<script setup lang="ts">
import { inject } from 'vue'

const others = inject<string[]>('value')
const reverse = inject<() => void>('reverse')
</script>

<template>
  <h3>{{ others?.[2] }}</h3>
  <h3>{{ others?.[3] }}</h3>
  <button @click="reverse">反转</button>
</template>
