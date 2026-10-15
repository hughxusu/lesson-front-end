<script setup lang="ts">
import ShowCard1 from '@/components/show_card_1.vue'
</script>

<template>
  <div class="cards">
    <ShowCard1 title="题龙阳县青草湖">
      <p>西风吹老洞庭波，<br />一夜湘君白发多。<br />醉后不知天在水，<br />满船清梦压星河。</p>
    </ShowCard1>
    <ShowCard1 title="热门图片">
      <img style="width: 100%" src="https://picsum.photos/300/200" />
    </ShowCard1>
    <ShowCard1></ShowCard1>
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
