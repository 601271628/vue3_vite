<template>
  <div id='grandson'>
    <h1>我是grandson组件:{{person[0].name}}--{{person[0].age}}</h1>

    <!--  -->
    <Dialog></Dialog>
  </div>
</template>

<script>
import { inject } from "vue"
import Dialog from "./dialog.vue"
export default {
  name: 'grandson',
  components: { Dialog },
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
