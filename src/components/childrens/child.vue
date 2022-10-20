<template>
  <div id='child'>
    <h1>我是child组件</h1>
    <grandson></grandson>
  </div>
</template>

<script>
import grandson from "./grandson.vue"
export default {
  name: 'child',
  components: { grandson },
};
</script>
<style scoped>
#child {
  background-color: green;
  padding: 10px;
}
</style>
