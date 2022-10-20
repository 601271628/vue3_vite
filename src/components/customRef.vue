<template>
  <h1>自定义ref(响应式)</h1>
  <h2>{{num}}</h2>
  <input
    type="text"
    v-model="num"
  >
</template>

<script>
import { ref, customRef } from 'vue';
export default {
  name: 'customRef',
  setup() {
    // let num = ref(0)
    // 自定义ref

    function myRef(value, delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            track() // 追踪一下数据的改变
            return value
          },
          set(newV) {
            value = newV
            timer && clearTimeout(timer)
            timer = setTimeout(() => {
              trigger() //触发器 告诉vue去重新解析模板
            }, delay);
          }
        }
      })
    }

    let num = myRef(0, 500)

    return {
      num
    }
  }
};
</script>
<style>
</style>
