<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="nav">
    <RouterLink class="nav-link" to="/">首页</RouterLink>
    <RouterLink class="nav-link" to="/about">关于</RouterLink>
    <RouterLink class="nav-link" to="/contact">联系</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped lang="less">
.nav {
  height: 60px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-link {
    margin: 0 10px;
  }
}
</style>
