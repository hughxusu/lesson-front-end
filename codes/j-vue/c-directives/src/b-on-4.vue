<script setup lang="ts">
function handleEnter() {
  alert('按下了Enter键')
}

function handleEsc() {
  alert('按下了Esc键')
}
</script>

<template>
  <input type="text" @keyup.enter="handleEnter" />
  <hr />
  <input type="text" @keyup.esc="handleEsc" />
</template>
