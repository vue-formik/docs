export const CommonProps = [
  {
    name: "formik",
    type: "object",
    description:
      "The Formik instance manages form state, validation, and field values. " +
      "Using Vue’s provide/inject, the Formik instance can be passed to child components. " +
      "If no props are provided, the component searches for a parent Formik instance and throws an error if none is found.",
  },
  {
    name: "name",
    required: true,
    type: "string",
    description: "The name of the form field, used to identify the field in the Formik instance.",
  },
  {
    name: "label",
    type: "string",
    description:
      "An optional label for the input field. If provided, it is displayed as a field label.",
  },
  {
    name: "placeholder",
    type: "string",
    description:
      "An optional placeholder for the input field. It is displayed inside the input when no value is present.",
  },
];

export const CommonBooleanProps = [
  {
    name: "disabled",
    type: "boolean",
    description: "Determines if the input field is disabled. Defaults to false.",
  },
  {
    name: "required",
    type: "boolean",
    description: "Determines if the input field is required. Defaults to false.",
  },
  {
    name: "readonly",
    type: "boolean",
    description: "Determines if the input field is read-only. Defaults to false.",
  },
];
