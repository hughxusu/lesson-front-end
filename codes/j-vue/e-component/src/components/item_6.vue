<script setup lang="ts">
defineOptions({ name: 'Item6' })

import { type Food } from '@/types/index'

const { food } = defineProps<{ food: Food }>()
const emit = defineEmits(['add-num', 'sub-num'])

function addNum() {
  emit('add-num', food)
}

function subNum() {
  emit('sub-num', food)
}
</script>

<template>
  <div class="box">
    <h3>{{ food.name }}</h3>
    <div class="bottom">
      价格：{{ food.price }}元
      <div class="num">
        <span>数量：{{ food.num }}</span>
        <button @click="addNum">+1</button>
        <button @click="subNum">-1</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  padding: 15px 30px;
  border-radius: 10px;
  background-color: #f4f4f4;
  width: 300px;
  margin: 20px auto;

  h3 {
    margin: 0 0 10px;
    padding: 0;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .num {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>
