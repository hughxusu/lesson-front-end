<script setup lang="ts">
function handleClick() {
  let ele = document.querySelector('#title')
  alert(ele?.textContent)
}
</script>

<template>
  <h2 id="title">明月出天山，苍茫云海间。</h2>
  <button @click="handleClick">点击我</button>
</template>
