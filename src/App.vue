<template>
  <!-- <setupF></setupF> -->

  <!-- <demo
    @hello="helloFunc"
    name="name111"
    :person="person"
  >
    <template v-slot:aaa="scope">
      <ul>
        <li v-for="item in scope.row">
          {{item.name}}--{{item.age}}
        </li>
      </ul>
    </template>
  </demo> -->

  <!-- <comp></comp> -->

  <!-- <watchV></watchV> -->

  <!-- <watchEffect></watchEffect> -->

  <button @click="show = !show">测试beforeUnmounted(beforeDestoy)</button>
  <!-- <lifeCycle v-if="show"></lifeCycle> -->
  <useHook v-if="show"></useHook>
</template>

<script>
import setupF from "./components/setupF.vue"
import demo from "./components/demo.vue"
import comp from "./components/comp.vue"
import watchV from "./components/watchV.vue"
import watchEffect from "./components/watchEffect.vue"
import lifeCycle from "./components/lifeCycle.vue"
import useHook from "./components/useHook.vue"
import { reactive, ref } from 'vue'
export default {
  name: 'App',
  components: { setupF, demo, comp, watchV, watchEffect, lifeCycle, useHook },
  setup() {
    let person = reactive([
      { name: "小明1", age: 20 },
      { name: "小明2", age: 21 },
      { name: "小明3", age: 22 },
    ])

    function helloFunc(data) {
      alert(data)
    }

    let show = ref(true)

    return {
      helloFunc,
      person,
      show
    }
  }
}
</script>
