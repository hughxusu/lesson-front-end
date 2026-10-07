<script setup lang="ts">
function clickMe(msg: string, e: MouseEvent) {
  console.log(msg, e)
}
</script>

<template>
  <button @click="clickMe('hello', $event)">点击我</button>
</template>
