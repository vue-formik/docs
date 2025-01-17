export default [
  {
    name: "Getting Started",
    children: [
      { name: "Introduction", path: "/getting-started/introduction" },
      { name: "Quick Start", path: "/getting-started/quick-start" },
    ],
  },
  {
    name: "Composable",
    children: [{ name: "useFormik", path: "/docs/composable/use-formik" }],
  },
  {
    name: "Components",
    children: [
      { name: "Why Components?", path: "/docs/components/why" },
      { name: "FormInput", path: "/docs/components/form-input" },
      { name: "FormSelect", path: "/docs/components/form-select" },
      { name: "FormTextarea", path: "/docs/components/form-textarea" },
      { name: "FormContentEditable", path: "/docs/components/form-contenteditable" },
      { name: "FormikForm", path: "/docs/components/formik-form" },
    ],
  },
  {
    name: "Project",
    children: [
      { name: "About", path: "/about" },
      { name: "Demo", path: "/demo" },
      {
        name: "Playground",
        path: "https://stackblitz.com/edit/vitejs-vite-px7jzkdy?file=src%2Fcomponents%2FHelloWorld.vue",
      },
    ],
  },
];
