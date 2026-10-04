<script setup lang="ts">
function aClick() {
  alert('点击了链接')
}

function btn1Click() {
  alert('点击了按钮1')
}

function btn2Click() {
  alert('点击了按钮2')
}

function upToDiv() {
  alert('事件冒泡了！')
}
</script>

<template>
  <a href="https://www.baidu.com" @click.prevent="aClick">百度跳转</a>
  <hr />
  <div class="btns">
    <div @click="upToDiv">
      <button @click="btn1Click">点击我</button>
    </div>
    <div @click="upToDiv">
      <button @click.stop="btn2Click">点击我</button>
    </div>
  </div>
</template>

<style scoped lang="less">
.btns {
  display: flex;
  gap: 10px;
  div {
    width: 200px;
    height: 200px;
    background-color: skyblue;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      width: 100px;
      height: 50px;
    }
  }
}
</style>
