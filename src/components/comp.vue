<template>
  <h1>{{person.name}}-{{person.age}}</h1>
  <div id='comp'>
    <input
      type="text"
      v-model="person.name"
    >
    <input
      type="text"
      v-model="person.age"
    >
    <!-- <input
      type="text"
      v-model="comp"
    > -->
    <input
      type="text"
      v-model="person.comp2"
    >
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
  name: 'comp',
  setup() {
    let person = reactive({
      name: "小明",
      age: 18
    })

    // // 计算属性
    // let comp = computed(() => {
    //   return person.name + '-' + person.age
    // })
    // person.comp2 = computed(() => {
    //   return person.name + '-' + person.age
    // })
    person.comp2 = computed({
      get() {
        return person.name + '-' + person.age
      },
      set(value) {
        const arr = value.split('-')
        console.log(arr);
        person.name = arr[0]
        person.age = arr[1]
      }
    })

    return {
      person,
      // comp
    }
  }
};
</script>
<style>
</style>
