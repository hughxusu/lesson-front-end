<script setup lang="ts">
import { useTemplateRef } from 'vue'

let title = useTemplateRef<HTMLHeadingElement>('title')
function handleClick() {
  alert(title.value?.textContent)
}
</script>

<template>
  <h2 ref="title">长风几万里，吹度玉门关。</h2>
  <button @click="handleClick">点击我</button>
</template>
