<script setup lang="ts">
import { computed, reactive } from 'vue';

const tech = reactive([
  { name: 'Less', isSelected: false },
  { name: 'TypeScript', isSelected: false },
  { name: 'Vue', isSelected: false },
]);

const allSelected = computed({
  get() {
    return tech.every((item) => item.isSelected);
  },

  set(value) {
    tech.forEach((item) => (item.isSelected = value));
  },
});
</script>

<template>
  <div><input type="checkbox" v-model="allSelected" />全部</div>
  <div>
    <span v-for="item in tech" :key="item.name">
      <input type="checkbox" v-model="item.isSelected" />
      {{ item.name }}
    </span>
  </div>
</template>

<style scoped lang="less">
div {
  display: flex;
  gap: 10px;
}
</style>
