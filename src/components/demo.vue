<template>
  <div id='demo'>
    <h1>{{name}}</h1>
    <button @click="emitFunc">emit</button><br>
    <!-- slot插槽 -->
    <slot name="aaa"></slot>
  </div>
</template>

<script>
export default {
  name: 'demo',
  props: ['name'],
  // setup没有this 有context
  setup(props, context) {
    console.log(props, context);
    // 插槽
    console.log("插槽", context.slots);

    function emitFunc() {
      // 发射事件
      context.emit("hello", 666)
    }
    return {
      emitFunc
    }
  }
};
</script>
<style>
</style>
