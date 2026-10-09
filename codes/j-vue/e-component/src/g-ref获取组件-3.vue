<script setup lang="ts">
import TitleLine from '@/components/title_line_3.vue'
import { ref } from 'vue'

const sentence = ref('云对雨')

function handleInput(refs: any, e: any) {
  let value = e.target.value
  console.log(refs)

  for (let key in refs) {
    refs[key].msg = value
  }
}

defineExpose({
  sentence,
})
</script>

<template>
  <h1>{{ sentence }}</h1>

  <input type="text" @input="handleInput($refs, $event)" />
  <TitleLine ref="line-one" />
  <TitleLine ref="line-two" />
</template>
