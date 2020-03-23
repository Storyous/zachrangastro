import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import router from "./router";
import VueGtag from "vue-gtag";
import MobileDetect from "mobile-detect";

Vue.config.productionTip = false;
Vue.prototype.$isMobile =
  new MobileDetect(window.navigator.userAgent).mobile() !== null;

Vue.use(VueGtag, {
  config: { id: "UA-84337365-18" }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
