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

  <!-- <button @click="show = !show">测试beforeUnmounted(beforeDestoy)</button> -->
  <!-- <lifeCycle v-if="show"></lifeCycle> -->
  <!-- <useHook v-if="show"></useHook> -->

  <!-- <toRef></toRef> -->

  <!-- <readOnly></readOnly> -->

  <!-- <customRef></customRef> -->

  <!-- <h1>{{person[0].name}}--{{person[0].age}}</h1>
  <child></child> -->

  <suspenseV></suspenseV>

</template>

<script>
import setupF from "./components/setupF.vue"
import demo from "./components/demo.vue"
import comp from "./components/comp.vue"
import watchV from "./components/watchV.vue"
import watchEffect from "./components/watchEffect.vue"
import lifeCycle from "./components/lifeCycle.vue"
import useHook from "./components/useHook.vue"
import toRef from "./components/toRef.vue"
import readOnly from "./components/readOnly.vue"
import customRef from "./components/customRef.vue"
import child from "./components/childrens/child.vue"
import suspenseV from "./components/suspense.vue"

import { reactive, ref, provide } from 'vue'
export default {
  name: 'App',
  components: { setupF, demo, comp, watchV, watchEffect, lifeCycle, useHook, toRef, readOnly, customRef, child, suspenseV },
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

    // provide
    provide('person', person)

    return {
      helloFunc,
      person,
      show
    }
  }
}
</script>

<style>
#app {
  background-color: beige;
  padding: 10px;
}
</style>
