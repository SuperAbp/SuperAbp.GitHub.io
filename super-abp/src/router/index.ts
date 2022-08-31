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
        path: "docs/code-generation",
        meta: {
          enTitle: "Code Generation",
          title: "代码生成器",
          category: "docs",
        },
        component: () => import("../docs/code-generation.md"),
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
