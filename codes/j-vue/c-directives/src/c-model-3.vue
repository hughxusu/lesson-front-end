<script setup lang="ts">
import { reactive } from 'vue'

const info = reactive({
  area: '',
  intro: '',
})
</script>

<template>
  <div>
    <span>区域: </span> <br />
    <select v-model.number="info.area" style="width: 100px">
      <option value="0">北京</option>
      <option value="1">天津</option>
      <option value="2">铁岭</option>
    </select>
  </div>
  <hr />
  <div>
    <span>自我介绍</span> <br />
    <textarea v-model.lazy="info.intro" rows="4"></textarea>
  </div>
</template>
