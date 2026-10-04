<script setup lang="ts">
import { reactive } from 'vue'

const info = reactive({
  area: '',
  gender: '男',
  hobby: [],
  intro: '',
  agree: '',
})
</script>

<template>
  <div>
    <span>区域: </span> <br />
    <select v-model="info.area" style="width: 100px">
      <option value="0">北京</option>
      <option value="1">天津</option>
      <option value="2">铁岭</option>
    </select>
  </div>
  <hr />
  <div>
    <span>性别: </span> <br />
    <input type="radio" v-model="info.gender" value="男" />男
    <input type="radio" v-model="info.gender" value="女" />女
  </div>
  <hr />
  <div>
    <span>爱好</span> <br />
    <input type="checkbox" v-model="info.hobby" value="足球" /> 足球
    <input type="checkbox" v-model="info.hobby" value="篮球" /> 篮球
    <input type="checkbox" v-model="info.hobby" value="写代码" /> 写代码
  </div>
  <hr />
  <div>
    <span>自我介绍</span> <br />
    <textarea v-model="info.intro" rows="4"></textarea>
  </div>
  <hr />
  <div>
    <input type="checkbox" v-model="info.agree" />
    <!-- <input type="checkbox" v-model="info.agree" true-value="yes" false-value="no" /> -->
    <span>同意协议</span>
  </div>
</template>
