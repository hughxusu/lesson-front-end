<script setup lang="ts">
import Next1 from '@/components/next_11.vue'
import { reactive, provide } from 'vue'

const value = reactive(['偶来松树下，', '高枕石头眠。', '山中无历日，', '寒尽不知年。'])

const reverse = () => {
  value.reverse()
}

provide('value', value)
provide('reverse', reverse)
</script>

<template>
  <h2>{{ value[0] }}</h2>
  <h2>{{ value[1] }}</h2>
  <Next1 />
</template>
