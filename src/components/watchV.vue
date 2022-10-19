<template>
  <div id='watchV'>
    <input
      type="text"
      v-model="sum"
    >
    <input
      type="text"
      v-model="msg"
    >
    <label for="">name</label>
    <input
      type="text"
      v-model="person.name"
    >
    <label for="">age</label>
    <input
      type="text"
      v-model="person.age"
    >
    <label for="">salary</label>
    <input
      type="text"
      v-model="person.obj.job.salary"
    ><br>
    <label for="">P2 salary</label>
    <input
      type="text"
      v-model="person2.job.j.salary"
    ><br>
  </div>
</template>

<script>
import { ref, watch, reactive } from "vue"
export default {
  name: 'watchV',
  //   //   vue2 watch
  //   watch: {
  //     // sum(newValue) {
  //     //   console.log('改变了', newValue);
  //     // }

  //     sum: {
  //       handler(newVal, oldVal) {
  //         console.log(newVal, oldVal)
  //       },
  //       immediate: true,
  //       deep: true,
  //     }
  //   },
  setup() {
    let sum = ref(0)
    let msg = ref("hello")
    let person = reactive({
      name: '小明',
      age: 20,
      obj: {
        job: {
          salary: 3000
        }
      }
    })

    // vue3
    // 监听一个
    // watch(sum, (newVal, oldVal) => {
    //   console.log(newVal, oldVal)
    // })
    // 监听多个
    // watch([sum, msg], (newVal, oldVal) => {
    //   console.log(newVal, oldVal)
    // })
    // 完整写法
    // watch([sum, msg], (newVal, oldVal) => {
    //   console.log(newVal, oldVal)
    // }, { immediate: true, deep: true })

    /**
     * 
     * 监听reactive定义的响应式数据存在bug
     *      1. 无法正常显示oldVal (这是vue3的bug，无法解决)
     *      2. 强制开启了深度监听，不管嵌套多少都会wtch到（deep：false无效）
     * 
     * */
    // watch(person, (newVal, oldVal) => {
    //   console.log(newVal, oldVal)
    // })

    // 监听对象中的某个数据
    // watch(() => person.name, (newV, oldV) => {
    //   console.log(newV, oldV);
    // })

    // 监听对象中某些数据
    // watch([() => person.name, () => person.age], (newV, oldV) => {
    //   console.log(newV, oldV);
    // })

    // 监听对象中的“对象”属性 (但是oldV仍无效)
    // watch(() => person.obj, (newV, oldV) => {
    //   console.log(newV, oldV);
    // }, { deep: true })

    let person2 = ref({
      name: "小红花",
      job: {
        j: {
          salary: 3000
        }
      }
    })

    // ref对象监听的是value即proxy（reactive）
    // console.log(person2);
    // watch(person2.value, (newV, oldV) => {
    //   console.log(newV, oldV);
    // })

    watch(person2, (newV, oldV) => {
      console.log(newV, oldV);
    }, { deep: true })


    return {
      sum,
      msg,
      person,
      person2
    }
  }
}
</script>
<style>
</style>
