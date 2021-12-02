import Vue from "vue";
import App from "./App.vue";
// import VueAplayer from 'vue-aplayer';
import AmapVue from "@amap/amap-vue";

Vue.config.productionTip = false;

AmapVue.config.key = "72270b16a1fc514d607e013124e7ca61";
Vue.use(AmapVue);

new Vue({
  render: h => h(App)
}).$mount("#app");
