<script setup lang="ts">
import Item from '@/components/item_4.vue'
import { type Food } from '@/types/index'
import { reactive } from 'vue'

let items = reactive<Food[]>([
  { id: 10011, name: '锅包肉', price: 32.5, num: 1 },
  { id: 10022, name: '地三鲜', price: 24.5, num: 1 },
  { id: 10033, name: '米饭', price: 2, num: 2 },
])

function addNum(item: Food) {
  item.num++
}

function subNum(item: Food) {
  item.num--
  if (item.num < 0) {
    item.num = 0
  }
}
</script>

<template>
  <Item v-for="item in items" :key="item.id" :food="item" :addNum="addNum" :subNum="subNum" />
</template>
