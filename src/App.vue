<template>
  <!-- <setupF></setupF> -->

  <!-- <demo
    @hello="helloFunc"
    name="name111"
  >
    <template v-slot:aaa>
      <span>123</span>
    </template>
  </demo> -->

  <comp></comp>
</template>

<script>
import setupF from "./components/setupF.vue"
import demo from "./components/demo.vue"
import comp from "./components/comp.vue"
export default {
  name: 'App',
  components: { setupF, demo, comp },
  setup() {
    function helloFunc(data) {
      alert(data)
    }

    return {
      helloFunc
    }
  }
}
</script>
