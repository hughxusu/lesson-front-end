<script setup lang="ts">
import Next1 from '@/components/next_1.vue'
import { reactive } from 'vue'

const value = reactive(['偶来松树下，', '高枕石头眠。', '山中无历日，', '寒尽不知年。'])

const reverse = () => {
  value.reverse()
}
</script>

<template>
  <h2>{{ value[0] }}</h2>
  <Next1 :two="value[1]" :three="value[2]" :four="value[3]" @reverse="reverse" />
</template>
