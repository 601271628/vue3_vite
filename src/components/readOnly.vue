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

  <br>
  <h1>{{person.car}}</h1>
  <button @click="person.car.price+='!'">加价</button>
  <button @click="addCar">addCar</button>
</template>

<script>
import { ref, reactive, toRefs, readonly, shallowReadonly, toRaw, markRaw } from "vue"
import usePoint from "../hooks/usePoint.js"

export default {
  name: 'readOnly',
  setup() {
    // readonly 只读
    // shallowReadonly 第一层不能修改 深度的可以
    // toRaw 将一个响应式数据转变成普通对象
    // markRaw 让一个新添加的属性不是响应式的
    let person = reactive({
      name: "123",
      age: 20,
      job: {
        salary: 2000
      }
    })
    let num = ref(0)

    // toRaw 将一个响应式数据转变成普通对象
    let num2 = toRaw(num.value)
    let person2 = toRaw(person)
    console.log(person2);
    console.log(num2);

    // markRaw让新添加的属性不是响应式的
    function addCar() {
      let car = { name: 'benc', price: '40w' }
      // 下面添加的是响应式的
      // person.car = car
      // markRow修饰后不是响应式
      person.car = markRaw(car)
    }

    // readonly场景：如引入第外部文件 但是不可以修改
    let point = readonly(usePoint())

    return {
      person,
      ...toRefs(person),
      point,
      num2,
      addCar
    }
  }
};
</script>
<style>
</style>
