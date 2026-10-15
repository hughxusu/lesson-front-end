<script setup lang="ts">
import ShowCard3 from '@/components/show_card_3.vue'
</script>

<template>
  <div class="cards">
    <ShowCard3 v-slot="{ users }">
      <h3>用户列表</h3>
      <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }} ({{ user.id }})</li>
      </ul>
    </ShowCard3>
    <ShowCard3 v-slot="{ users }">
      <h3>用户列表</h3>
      <ol>
        <li v-for="user in users" :key="user.id">{{ user.name }} ({{ user.id }})</li>
      </ol>
    </ShowCard3>
  </div>
</template>
<style scoped lang="less">
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  p {
    font-size: 18px;
    line-height: 2;
    text-align: center;
  }
}
</style>
