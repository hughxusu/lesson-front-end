<script setup lang="ts">
import Item from '@/components/item_1.vue'

let items = [1, 2, 3]
</script>

<template>
  <Item v-for="item in items" :key="item" />
</template>
