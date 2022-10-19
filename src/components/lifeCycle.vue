<template>
  <h1>生命周期</h1>
  <p>{{}}</p>
  <img
    src="../../public/1.jpg"
    width="500"
  >
  <p>{{p.x}}--{{p.y}}</p>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, reactive } from "vue"
export default {
  name: 'lifeCycle',
  // 写在setup外部
  //   beforeUnmount() {
  //     console.log("beforeUnmount");
  //   },
  //   unmounted() {
  //     console.log("unmounted");
  //   }
  setup(props, context) {
    let p = reactive({
      x: 0,
      y: 0
    })
    function func(e) {
      p.x = e.pageX
      p.y = e.pageY
    }

    console.log("setup(beforecreate + created)");

    onBeforeMount(() => {
      console.log("onBeforeMount");
    })
    onMounted(() => {
      console.log("onMounted");
      // 绑定事件
      window.addEventListener("click", func)
    })
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    })
    onUpdated(() => {
      console.log("onUpdated");
    })
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");

      //   移出事件
      window.removeEventListener("click", func)
    })
    onUnmounted(() => {
      console.log("onUnmounted");
    })

    return { p }
  }
};
</script>
<style>
</style>
