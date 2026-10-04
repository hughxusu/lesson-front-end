<script setup lang="ts">
function aClick(e: MouseEvent) {
  e.preventDefault()
  alert('点击了链接')
}

function btnClick(msg: string, e: MouseEvent) {
  e.preventDefault()
  alert(msg)
}
</script>

<template>
  <a href="https://www.baidu.com" @click="aClick">百度跳转</a>
  <hr />
  <button @click="btnClick('点击了按钮', $event)">点击我</button>
</template>
