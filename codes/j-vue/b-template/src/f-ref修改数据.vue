<script setup lang="ts">
defineOptions({ name: 'App' })

import { ref } from 'vue'

let message = ref('荡胸生曾云，决眦入归鸟。')
setTimeout(() => {
  message.value = '会当凌绝顶，一览众山小。'
}, 1500)
</script>

<template>
  <h2>{{ message }}</h2>
</template>
