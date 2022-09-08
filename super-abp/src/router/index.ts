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
    path: "/utils",
    component: Layout,
    redirect: "/utils/code-generation",
    children: [
      {
        path: "code-generation",
        meta: {
          enTitle: "Code Generation",
          title: "代码生成器",
          category: "utils",
        },
        component: () => import("../docs/code-generation.md"),
      },
    ],
  },
  {
    path: "/modules",
    component: Layout,
    redirect: "/modules/media",
    children: [
      {
        path: "audit-logging",
        meta: {
          enTitle: "AuditLogging",
          title: "审计日志",
          category: "modules",
        },
        component: () => import("../docs/audit-logging.md"),
      },
      {
        path: "media",
        meta: {
          enTitle: "media",
          title: "文件上传",
          category: "modules",
        },
        component: () => import("../docs/media.md"),
      },
      {
        path: "theme",
        children: [
          {
            path: "ztree",
            meta: {
              enTitle: "ZTree",
              title: "ZTree",
              category: "theme",
            },
            component: () => import("../docs/theme/ztree.md"),
          },
        ],
        meta: {
          enTitle: "theme",
          title: "主题",
          category: "modules",
        },
        component: () => import("../docs/theme.md"),
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
