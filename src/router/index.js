import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/design-and-theme",
    name: "DesignAndTheme",
    component: () => import("../views/DesignAndTheme.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings"),
  },
  {
    path: "/tags",
    name: "Tags",
    component: () => import("../views/Tags"),
  },
  {
    path: "/store",
    name: "Store",
    component: () => import("../views/Store"),
  },
  {
    path: "/logic-jump",
    name: "LogicJump",
    component: () => import("../views/LogicJump"),
  },
  {
    path: "/canvas-form",
    name: "CanvasForm",
    component: () => import("../views/CanvasForm"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
