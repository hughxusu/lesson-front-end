<script setup lang="ts">
import MyInput from '@/components/my_input_4.vue'
import { reactive } from 'vue'

const value = reactive({ username: '', password: '' })
</script>

<template>
  <MyInput v-model:name="value.username" v-model:pwd="value.password" />
  <h2>用户名：{{ value.username }}，密码：{{ value.password }}</h2>
</template>
