<template>
  <h1>watcheffect</h1>
  <input
    type="text"
    v-model="obj.name"
    name=""
    id=""
  >
  <input
    type="text"
    v-model="obj.age"
    name=""
    id=""
  >
  <input
    type="text"
    v-model="obj.job.salary"
    name=""
    id=""
  >
  <h1>{{obj.comp}}</h1>
</template>

<script>
import { watchEffect, reactive, computed } from 'vue';
export default {
  name: 'watchEffect',
  setup() {
    let obj = reactive({
      name: '小明',
      age: 20,
      job: {
        salary: 2000
      }
    })

    // watchEffect
    /**
     * computed是注重计算出来的值，需要些返回值
     * watchEffect注重的是过程(如变化了就重新写ajax请求)，不需要返回值
     * 
     */
    watchEffect(() => {
      console.log("使用了", obj.name, obj.job.salary);
      console.log("使用了谁就监听谁");
    })
    // computed
    // obj.comp = computed(() => {
    //   return obj.name + '-' + obj.age
    // })

    return {
      obj
    }
  }
};
</script>
<style>
</style>
