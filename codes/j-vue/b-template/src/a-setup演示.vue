<script lang="ts">
export default {
  name: 'App',
  setup() {
    let message = 'Hello Vue 3!'

    return {
      message,
    }
  },
}
</script>

<template>
  <h2>{{ message }}</h2>
</template>
