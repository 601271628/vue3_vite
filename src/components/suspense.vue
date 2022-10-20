<template>
  <div id='suspense'>
    <h1>使用defineAsyncComponent动态引入组件 会存在一个组件加载快慢的问题,可以使用suspense组件,让其未加载出来时给出提示信息</h1>
    <suspense>
      <!-- 结果要显示的组件 -->
      <template v-slot:default>
        <useHook></useHook>
      </template>
      <!-- fallback撤退：提示信息 -->
      <template v-slot:fallback>
        网络卡顿,请稍等。。。。。
      </template>
    </suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue"
const useHook = defineAsyncComponent(() => import('./useHook.vue'))

export default {
  name: 'suspense',
  components: { useHook },
};
</script>
<style scope>
#suspense {
  padding: 10px;
}
</style>
