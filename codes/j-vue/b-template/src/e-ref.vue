<script setup lang="ts">
import { ref } from 'vue'

let message1 = '岱宗夫如何？齐鲁青未了。'
let message2 = ref('造化钟神秀，阴阳割昏晓。')

console.log(message1)
console.log(message2)
</script>

<template>
  <h2>{{ message1 }}</h2>
  <h2>{{ message2 }}</h2>
</template>
