<script setup lang="ts">
import MyInput from '@/components/my_input_3.vue'
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <MyInput v-model="value" />
  <h2>{{ value }}</h2>
</template>
