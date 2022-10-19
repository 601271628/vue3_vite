<template>
  <h1>{{name}}</h1>
  <h1>{{job.salary}}</h1>
  <h1>{{job2.salary}}</h1>
  <h1>{{arr[0]}}</h1>
  <button @click="change">change</button>
</template>

<script>
// import { h } from 'vue';
import { ref, reactive } from "vue"
export default {
  name: 'setupF',
  setup() {
    // ================================ data ================================
    // 这个不是响应式的
    // let name = "name111"

    // 响应式 ref definedproperty
    let name = ref("张山")
    let job = ref({
      salary: 3000
    })
    // reactive只用于对象 proxy（obj不加reactive也可以响应式）
    let job2 = reactive({
      salary: 3000
    })
    let arr = reactive([1])

    // reactive不能设置基本数据类型 ref加.value太复杂 写成如下
    // let data = reactive({
    //   name:"123",
    //   arr:[1]
    // })

    //================================ method ================================
    function change() {
      name.value = "李四"
      job.value.salary = 4000
      job2.salary = 4000
      // proxy支持索引值 vue2的definepropertyu不支持
      arr[0] = 2
    }


    // ================================ return ================================  
    // return obj
    return {
      name,
      job,
      job2,
      arr,
      change
    }

    // return render
    // return () => { return h("h1", "render-h1") }
  }
}
</script>
