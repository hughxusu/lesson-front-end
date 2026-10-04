<script setup lang="ts">
let message = '流水如有意，暮禽相与还。'
let isMale = true
let greeting = 'Hello world!'
let name = '张三'
let score = 90.5
</script>

<template>
  <h2>{{ message }}</h2>
  <h2>{{ isMale ? '男' : '女' }}</h2>
  <h2>{{ greeting.toUpperCase() }}</h2>
  <h2>{{ `${name}的分数是${score}` }}</h2>
</template>
