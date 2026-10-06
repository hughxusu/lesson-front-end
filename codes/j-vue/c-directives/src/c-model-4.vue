<script setup lang="ts">
import { ref } from 'vue'

const txt = ref('争将世上无期别，换得年年一度来。')
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
