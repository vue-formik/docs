import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/HomeView.vue"),
      meta: {
        footer: true,
      },
    },
    {
      path: "/demo",
      component: () => import("@/views/DemoView.vue"),
      meta: {
        footer: true,
      },
    },
    {
      path: "/getting-started",
      meta: {
        sidebar: true,
      },
      children: [
        {
          path: "introduction",
          component: () => import("@/views/gettingStarted/IntroductionView.vue"),
        },
        {
          path: "quick-start",
          component: () => import("@/views/gettingStarted/QuickStartView.vue"),
        },
        {
          path: "why-vue-formik",
          component: () => import("@/views/gettingStarted/WhyVueFormikView.vue"),
        },
      ],
    },
    {
      path: "/docs",
      children: [
        {
          path: "composable",
          children: [
            {
              path: "use-formik",
              component: () => import("@/views/libDocs/composables/useFormik/UseFormikView.vue"),
            },
            {
              path: "use-field-array",
              component: () => import("@/views/libDocs/composables/UseFieldArrayView.vue"),
            },
          ],
        },
        {
          path: "components",
          children: [
            {
              path: "why",
              component: () => import("@/views/libDocs/components/WhyView.vue"),
            },
            {
              path: "form-input",
              component: () => import("@/views/libDocs/components/FormInputView.vue"),
            },
            {
              path: "form-select",
              component: () => import("@/views/libDocs/components/FormSelectView.vue"),
            },
            {
              path: "form-textarea",
              component: () => import("@/views/libDocs/components/FormTextareaView.vue"),
            },
            {
              path: "form-contenteditable",
              component: () => import("@/views/libDocs/components/FormContentEditableView.vue"),
            },
            {
              path: "formik-form",
              component: () => import("@/views/libDocs/components/FormikFormView.vue"),
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
