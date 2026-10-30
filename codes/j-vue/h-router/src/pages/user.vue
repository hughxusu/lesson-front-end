<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import axios from 'axios'
const user = reactive<any>({})

onMounted(() => {
  axios.get('https://dummyjson.com/users/1').then((res) => {
    Object.assign(user, res.data)
    console.log(user)
  })
})
</script>

<template>
  <div class="container">
    <h2>用户</h2>
    <img width="128px" :src="user.image" alt="用户头像" />
    <h3>姓名：{{ user.username }}</h3>
    <h3>邮箱：{{ user.email }}</h3>
  </div>
</template>

<style scoped lang="less">
.container {
  padding: 20px;
}
</style>
