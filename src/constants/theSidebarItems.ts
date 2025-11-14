import Links from "@/constants/Links.ts";

export default [
  {
    name: "Getting Started",
    children: [
      { name: "Introduction", path: "/getting-started/introduction" },
      { name: "Quick Start", path: "/getting-started/quick-start" },
      { name: "Why Vue Formik?", path: "/getting-started/why-vue-formik" },
    ],
  },
  {
    name: "Composable",
    children: [
      { name: "useFormik", path: "/docs/composable/use-formik" },
      { name: "useFieldArray", path: "/docs/composable/use-field-array" },
    ],
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
        path: Links.Playground,
      },
    ],
  },
];
