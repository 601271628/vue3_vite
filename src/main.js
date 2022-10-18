import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";

// vue3
createApp(App).mount("#app");
// const app = createApp(App)
// app.mount("#app")

// // vue2
// const vm = new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
