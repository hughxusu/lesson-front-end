<script setup lang="ts">
import { useAttrs } from 'vue'
import Next2 from './next_2.vue'

defineProps(['two'])

const attrs = useAttrs()
console.log(attrs)
</script>

<template>
  <h3>{{ two }}</h3>
  <Next2 v-bind="$attrs" />
</template>
