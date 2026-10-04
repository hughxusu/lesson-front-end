<script setup lang="ts">
import { ref } from 'vue'

let isShow = ref(true)
</script>

<template>
  <input type="checkbox" v-model="isShow" />
  <hr />
  <p v-show="isShow">竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。</p>
  <p v-if="isShow">料峭春风吹酒醒，微冷，山头斜照却相迎。</p>
  <p v-else>回首向来萧瑟处，归去，也无风雨也无晴。</p>
</template>
