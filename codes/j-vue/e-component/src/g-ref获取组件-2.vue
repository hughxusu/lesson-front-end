<script setup lang="ts">
import TitleLine from '@/components/title_line_2.vue'
import { useTemplateRef } from 'vue'

let title = useTemplateRef('title')
function handleClick() {
  if (title.value) {
    title.value.msg = '戍客望边邑，思归多苦颜。'
  }
}
</script>

<template>
  <TitleLine ref="title" />
  <button @click="handleClick">点击我</button>
</template>
