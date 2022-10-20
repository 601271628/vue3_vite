<template>
  <div id='Dialog'>
    <button @click="ishow = true">显示</button>
    <!-- teleport将里面的弹框传送到html了 即其位置相对于html（body）了 -->
    <teleport to="html">
      <div
        class="mask"
        v-show="ishow"
      >
        <div class="content">
          <h1>我是遮罩层</h1>
          <button @click="ishow = false">关闭</button>
        </div>
      </div>
    </teleport>

  </div>
</template>

<script>
import { ref } from "vue"
export default {
  name: 'Dialog',
  components: {},
  setup() {
    let ishow = ref(false)
    return { ishow }
  }
};
</script>
<style scope>
.mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 200px;
  height: 200px;
  background-color: aliceblue;
  z-index: 999;
}
</style>
