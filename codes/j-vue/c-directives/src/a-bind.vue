<script setup lang="ts">
let link = 'https://vuejs.org/'
let src =
  'https://raw.githubusercontent.com/hughxusu/lesson-front-end/refs/heads/main/static/silder/naz1.jpg'
</script>

<template>
  <a v-bind:href="link" target="_blank" rel="noopener">百度首页</a>
  <hr />
  <img :src="src" alt="naz1" />
</template>
