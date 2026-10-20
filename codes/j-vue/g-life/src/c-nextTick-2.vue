<script setup lang="ts">
import { ref, nextTick, useTemplateRef } from 'vue'

let search = useTemplateRef<HTMLInputElement>('search')

const flag = ref(false)

async function handleClick() {
  flag.value = true
  await nextTick()
  search.value?.focus()
}
</script>

<template>
  <button v-if="!flag" @click="handleClick">点击搜索</button>
  <input ref="search" v-else type="text" placeholder="这是一个输入框" @blur="flag = false" />
</template>
