<template>
  <h1>readOnly</h1>
  <h1>{{name}}-{{age}}--{{job.salary}}</h1>
  <input
    type="text"
    v-model="name"
  >
  <input
    type="text"
    v-model="age"
  >
  <input
    type="text"
    v-model="job.salary"
  >

  <h1>x:{{point.x}},y:{{point.y}}</h1>
  <button @click="point.x = 1">change</button>
</template>

<script>
import { reactive, toRefs, readonly, shallowReadonly } from "vue"
import usePoint from "../hooks/usePoint.js"

export default {
  name: 'readOnly',
  setup() {
    // readonly 只读
    // shallowReadonly 第一层不能修改 深度的可以
    let person = reactive({
      name: "123",
      age: 20,
      job: {
        salary: 2000
      }
    })

    // 场景：如引入第外部文件 但是不可以修改
    let point = readonly(usePoint())

    return {
      ...toRefs(person),
      point
    }
  }
};
</script>
<style>
</style>
