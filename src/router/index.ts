import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/playground",
      name: "playground",
      component: () => import("@/views/PlaygroundView.vue"),
    },
    {
      path: "/getting-started",
      name: "getting-started",
      meta: {
        sidebar: true,
      },
      children: [
        {
          path: "introduction",
          name: "getting-started-introduction",
          component: () => import("@/views/gettingStarted/IntroductionView.vue"),
        },
        {
          path: "quick-start",
          name: "getting-started-quick-start",
          component: () => import("@/views/gettingStarted/QuickStartView.vue"),
        },
      ],
    },
    {
      path: "/docs",
      name: "docs",
      component: () => import("@/views/DocsView.vue"),
      meta: {
        sidebar: true,
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
  ],
});

export default router;
