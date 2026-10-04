<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>

<template>
  <label>用户名：<br /><input type="text" v-model="username" /></label>
  <hr />
  <label>密码：<br /><input type="password" v-model="password" /></label>
</template>
