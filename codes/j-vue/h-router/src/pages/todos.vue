<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const todos = ref<any>([])

onMounted(() => {
  axios.get('https://dummyjson.com/todos?limit=3&skip=10&select=todo,completed').then((res) => {
    todos.value = res.data.todos
  })
})
</script>

<template>
  <div class="container">
    <h2>待办事项</h2>
    <hr />
    <ul v-for="todo in todos" :key="todo.id">
      <li><input type="checkbox" v-model="todo.completed" /> {{ todo.todo }}</li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.container {
  padding: 20px;
  h2 {
    margin-bottom: 20px;
  }

  ul {
    margin-top: 20px;
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 10px;
    }
  }
}
</style>
