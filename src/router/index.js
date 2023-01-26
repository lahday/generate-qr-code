import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ViewAllQr from "../views/ViewAllQr";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/viewall",
    name: "QrList",
    component: ViewAllQr,
  },
  {
    path: "/home/qrmodal",
    name: "QrModal",
    component: () => import("@/components/QrModal"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
