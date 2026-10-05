<script setup lang="ts">
import { ref } from 'vue'

const txt = ref('金樽清酒斗十千，玉盘珍羞直万钱。')
</script>

<template>
  <input :value="txt" type="text" style="width: 300px"></input>
</template>

<style scoped lang="less">
input {
  padding: 5px 10px;
  font-size: 18px;
}
</style>
