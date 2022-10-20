<template>
  <h1>x:{{point.x}},y:{{point.y}}</h1>
</template>

<script>
// import { onBeforeUnmount, onMounted, reactive } from "vue"
import usePoint from "../hooks/usePoint"
export default {
  name: 'useHook',
  setup() {
    // 内容提取出去了
    let point = usePoint()

    return { point }
  }
};
</script>
<style>
</style>
