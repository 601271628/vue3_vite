import { onBeforeUnmount, onMounted, reactive } from "vue";

export default function () {
  let point = reactive({
    x: 0,
    y: 0,
  });

  function pointChange(e) {
    point.x = e.pageX;
    point.y = e.pageY;
  }
  onMounted(() => {
    window.addEventListener("click", pointChange);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", pointChange);
  });

  return point;
}
