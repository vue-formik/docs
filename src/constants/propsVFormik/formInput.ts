import type { IColumn, IRow } from "@/components/core/simpleTable/types.ts";

export const FormInputPropsCols = [
  { header: "Name", field: "name" },
  { header: "Type", field: "type", code: true },
  { header: "Description", field: "description" },
] as IColumn[];
export const FormInputProps = [
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
    name: "type",
    type: "string",
    description:
      "The type of the input field (e.g., 'text', 'password', 'email'). Defaults to 'text' if not provided.",
  },
  {
    name: "placeholder",
    type: "string",
    description:
      "An optional placeholder for the input field. It is displayed inside the input when no value is present.",
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

export const FormInputSlotCols = [
  { header: "Name", field: "name" },
  { header: "Description", field: "description" },
] as IColumn[];
export const FormInputSlots = [
  {
    name: "default",
    description:
      "Slot for rendering additional content or components inside the input container, below the input field.",
  },
  {
    name: "prepend",
    description:
      "Slot for rendering content or components before the input field, such as an icon or label.",
  },
  {
    name: "append",
    description:
      "Slot for rendering content or components after the input field, such as an action button or icon.",
  },
] as IRow[];
export const FormInputSketch = `
+-------------------------------------------------------+
| <div class="vf-field">                                |
|  [LABEL]                                              |
|                                                       |
|  <div class="vf-input">                               |
|      [PREPEND SLOT]                                   |
|                                                       |
|      [INPUT TAG]                                      |
|                                                       |
|      [APPEND SLOT]                                    |
|  </div>                                               |
|                                                       |
|  [ERROR MESSAGE]                                      |
|                                                       |
|  [DEFAULT SLOT]                                       |
| </div>                                                |
+-------------------------------------------------------+
`;
