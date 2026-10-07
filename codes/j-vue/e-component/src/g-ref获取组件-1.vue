<script setup lang="ts">
import TitleLine from '@/components/title_line_1.vue'
import { useTemplateRef } from 'vue'

let title = useTemplateRef('title')
function handleClick() {
  console.log(title)
}
</script>

<template>
  <TitleLine ref="title" />
  <button @click="handleClick">点击我</button>
</template>
