import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { ValidationProvider, extend } from "vee-validate";

Vue.config.productionTip = false;

extend("secret", {
  validate: (value) => value === "example",
  message: "This is not the magic word",
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
