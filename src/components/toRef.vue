<template>
  <h1>toRef</h1>
  <!-- <h1>toRef:{{name}}-{{age}}--{{salary}}</h1> -->
  <h1>toRefs:{{name}}-{{age}}--{{job.salary}}</h1>
  <h1>ref:{{obj.name}}-{{obj.age}}--{{obj.job.salary}}</h1>
  <!-- <label for="">toRef</label> -->
  <!-- <input
    type="text"
    v-model="name"
  >
  <input
    type="text"
    v-model="age"
  >
  <input
    type="text"
    v-model="salary"
  > -->
  <label for="">toRefs</label>
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
  <br>
  <label for="">ref</label>
  <input
    type="text"
    v-model="name1"
  >
  <input
    type="text"
    v-model="age1"
  >
  <input
    type="text"
    v-model="salary1"
  >
</template>

<script>
import { reactive, toRef, ref, toRefs } from 'vue';
export default {
  name: 'toRef',
  setup() {
    let obj = reactive({
      name: '小明',
      age: 20,
      job: {
        salary: 2000
      }
    })

    // 使用rective时 每次编写都要obj.name多了obj前缀
    // 引入toref torefs来去掉obj前缀
    return {
      obj,
      // 不响应（等价于name:"小明"）
      //   name: obj.name,
      //   age: obj.age,
      //   salary: obj.job.salary

      //   // toRef响应 和obj联系
      //   name: toRef(obj, 'name'),
      //   age: toRef(obj, 'age'),
      //   salary: toRef(obj.job, 'salary'),

      //   toRefs结果得到的是一个对象 每个属性都是ref对象
      ...toRefs(obj),

      //   使用ref的问题(数据分家 ref返回的是新的ref对象 和obj没联系的)
      name1: ref(obj.name),
      age1: ref(obj.age),
      salary1: ref(obj.job.salary)

    }
  }
};
</script>
<style>
</style>
