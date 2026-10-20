<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const url = ref('')
async function getDog() {
  const res = await axios.get('https://dog.ceo/api/breeds/image/random')
  url.value = res.data.message
}

onMounted(() => {
  getDog()
})
</script>

<template>
  <button @click="getDog">获取随机狗</button>
  <hr />
  <img height="300" :src="url" alt="logo" />
</template>

<style scoped></style>
