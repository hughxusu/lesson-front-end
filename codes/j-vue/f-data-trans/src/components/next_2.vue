<script setup lang="ts">
defineProps(['three', 'four'])
defineEmits(['reverse'])
</script>

<template>
  <h4>{{ three }}</h4>
  <h4>{{ four }}</h4>
  <button @click="$emit('reverse')">反转</button>
</template>
