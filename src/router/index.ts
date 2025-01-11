import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      meta: {
        footer: true,
      },
    },
    {
      path: "/playground",
      name: "playground",
      component: () => import("@/views/PlaygroundView.vue"),
      meta: {
        footer: true,
      },
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
      children: [
        {
          path: "composable",
          name: "composable",
          children: [
            {
              path: "use-formik",
              name: "use-formik",
              component: () => import("@/views/libDocs/composables/useFormik/UseFormikView.vue"),
            },
          ],
        },
        {
          path: "components",
          name: "components",
          children: [
            {
              path: "why",
              name: "why",
              component: () => import("@/views/libDocs/components/WhyView.vue"),
            },
            {
              path: "input-field",
              name: "input-field",
              component: () => import("@/views/libDocs/components/InputFieldVue.vue"),
            },
            {
              path: "select-field",
              name: "select-field",
              component: () => import("@/views/libDocs/components/SelectFieldView.vue"),
            },
            {
              path: "textarea-field",
              name: "textarea-field",
              component: () => import("@/views/libDocs/components/TextAreaField.vue"),
            },
            {
              path: "contenteditable-field",
              name: "contenteditable-field",
              component: () => import("@/views/libDocs/components/ContentEditableFieldView.vue"),
            },
          ],
        },
      ],
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
