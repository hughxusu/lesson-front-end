<script setup lang="ts">
import ShowCard2 from '@/components/show_card_2.vue'
</script>

<template>
  <div class="cards">
    <ShowCard2 title="题龙阳县青草湖">
      <template v-slot:title>
        <h3>题龙阳县青草湖</h3>
      </template>
      <template #content>
        <p>西风吹老洞庭波，<br />一夜湘君白发多。<br />醉后不知天在水，<br />满船清梦压星河。</p>
      </template>
    </ShowCard2>
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

  h3 {
    font-size: 22px;
    text-align: center;
  }
}
</style>
