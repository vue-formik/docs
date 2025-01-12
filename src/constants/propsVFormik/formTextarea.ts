import type { IColumn, IRow } from "@/components/core/simpleTable/types.ts";

export const FormTextareaPropsCols = [
  { header: "Name", field: "name" },
  { header: "Type", field: "type", code: true },
  { header: "Description", field: "description" },
] as IColumn[];

export const FormTextareaProps = [
  {
    name: "formik",
    type: "object",
    description:
      "The Formik instance, which provides methods for managing form state, including validation and field value handling.",
  },
  {
    name: "name",
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
  {
    name: "rows",
    type: "number | string",
    description: "The number of rows to display in the textarea. Defaults to 3 if not provided.",
  },
  {
    name: "readonly",
    type: "boolean",
    description: "Determines if the input field is read-only. Defaults to false.",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Determines if the input field is disabled. Defaults to false.",
  },
  {
    name: "inputProps",
    type: "object",
    description:
      "Additional props to pass to the input field, such as attributes like 'required' or custom data attributes.",
  },
] as IRow[];
