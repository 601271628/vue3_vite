<template>
  <div id='grandson'>
    <h1>我是grandson组件:{{person[0].name}}--{{person[0].age}}</h1>
  </div>
</template>

<script>
import { inject } from "vue"
export default {
  name: 'grandson',
  setup() {
    return {
      person: inject('person')
    }
  }
};
</script>
<style scoped>
#grandson {
  background-color: red;
  padding: 10px;
}
</style>
