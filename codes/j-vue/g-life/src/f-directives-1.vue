<script setup lang="ts">
const vHighlight = {
  mounted: (el: HTMLElement) => {
    el.classList.add('is-highlight')
  },
}
</script>

<template>
  <p v-highlight>三十功名尘与土，八千里路云和月。</p>
</template>

<style scoped lang="less">
.is-highlight {
  background-color: yellow;
}
</style>
