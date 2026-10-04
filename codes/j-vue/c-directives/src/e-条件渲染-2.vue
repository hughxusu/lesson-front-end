<script setup lang="ts">
import { ref } from 'vue'

let value = ref(0)
</script>

<template>
  <div>
    <select v-model.number="value" style="width: 100px">
      <option value="0">A</option>
      <option value="1">B</option>
      <option value="2">C</option>
    </select>
  </div>
  <div>
    <h2 v-if="value === 0">A</h2>
    <h2 v-else-if="value === 1">B</h2>
    <h2 v-else>C</h2>
  </div>
</template>
