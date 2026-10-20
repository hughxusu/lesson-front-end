<script setup lang="ts">
import useDog from '@/composables/useDog'

const { dogList, getDog } = useDog()
</script>

<template>
  <button @click="getDog">获取随机狗</button>
  <hr />
  <div class="pack">
    <img v-for="item in dogList" :key="item" :src="item" alt="logo" />
  </div>
</template>

<style scoped lang="less">
.pack {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  margin-top: 12px;

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}
</style>
