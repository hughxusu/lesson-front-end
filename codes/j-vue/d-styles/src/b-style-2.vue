<script setup lang="ts">
let font = {
  color: 'blue',
  fontSize: '18px',
  fontWeight: 'bold',
};

let box = {
  backgroundColor: 'pink',
  padding: '20px',
  borderRadius: '5px',
};
</script>

<template>
  <p :style="[font, box]">行路难，行路难，多歧路，今安在？</p>
</template>
