import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/PageLogin.vue"),
  },
  {
    path: "/home/:nome",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
