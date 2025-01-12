import type { IColumn, IRow } from "@/components/core/simpleTable/types";

export const FormContentEditablePropsCols = [
  { header: "Name", field: "name" },
  { header: "Type", field: "type", code: true },
  { header: "Description", field: "description" },
] as IColumn[];

export const FormContentEditableProps = [
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
    name: "contentProps",
    type: "object",
    description:
      "Additional props to pass to the contenteditable element, such as attributes like 'contenteditable' or custom data attributes.",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Determines if the input field is disabled. Defaults to false.",
  },
  {
    name: "readonly",
    type: "boolean",
    description: "Determines if the input field is read-only. Defaults to false.",
  },
] as IRow[];
