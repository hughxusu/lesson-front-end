<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="nav">
    <RouterLink class="nav-link" to="/recipes">食谱</RouterLink>
    <RouterLink class="nav-link" to="/todos">待办事项</RouterLink>
    <RouterLink class="nav-link" to="/user">用户</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped lang="less">
.nav {
  height: 60px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    margin: 0 10px;
    border: 1px solid #666;
    border-radius: 5px;
    padding: 5px 10px;
    background-color: #666;
    text-decoration: none;
    color: white;
  }
}
</style>
