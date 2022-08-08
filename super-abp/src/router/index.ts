import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Layout from "../layouts/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  { path: "/", redirect: { name: "Home" } },
  {
    path: "/docs",
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("../docs/customize-theme.md"),
      },
      {
        path: "vue/customize-theme",
        meta: {
          enTitle: "Customize Theme",
          title: "定制主题",
          category: "docs",
        },
        component: () => import("../docs/customize-theme.md"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: "auto" };
    }
  },
});

export default router;
