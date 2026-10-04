<script setup lang="ts">
let message = '荒城临古渡，落日满秋山。'

setTimeout(() => {
  message = '流水如有意，暮禽相与还。'
  console.log(message)
}, 1500)
</script>

<template>
  <h2>{{ message }}</h2>
</template>
