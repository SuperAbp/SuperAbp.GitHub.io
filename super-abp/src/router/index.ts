import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
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
        path: "identity",
        meta: {
          enTitle: "Identity",
          title: "Identity",
          category: "modules",
        },
        component: () => import("../docs/identity.md"),
      },
      {
        path: "setting-management",
        meta: {
          enTitle: "SettingManagement",
          title: "设置管理",
          category: "modules",
        },
        component: () => import("../docs/setting-management.md"),
      },
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
          enTitle: "Media",
          title: "文件上传",
          category: "modules",
        },
        component: () => import("../docs/media.md"),
      },
      {
        path: "bootstrap-table",
        meta: {
          enTitle: "BootstrapTable",
          title: "BootstrapTable",
          type: "主题",
          category: "modules",
        },
        component: () => import("../docs/themes/bootstrap-table.md"),
      },
      {
        path: "bootstrap-file-input",
        meta: {
          enTitle: "BootstrapFileInput",
          title: "BootstrapFileInput",
          type: "主题",
          category: "modules",
        },
        component: () => import("../docs/themes/bootstrap-file-input.md"),
      },
      {
        path: "bootstrap-icons",
        meta: {
          enTitle: "BootstrapIcons",
          title: "BootstrapIcons",
          type: "主题",
          category: "modules",
        },
        component: () => import("../docs/themes/bootstrap-icons.md"),
      },
      {
        path: "ztree",
        meta: {
          enTitle: "ZTree",
          title: "ZTree",
          type: "主题",
          category: "modules",
        },
        component: () => import("../docs/themes/ztree.md"),
      },
      {
        path: "select2",
        meta: {
          enTitle: "Select2",
          title: "Select2",
          type: "主题",
          category: "modules",
        },
        component: () => import("../docs/themes/select2.md"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to) => {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: "auto" };
    }
  },
});

export default router;
