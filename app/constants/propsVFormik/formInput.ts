import type { IColumn, IRow } from "@/components/core/simpleTable/types";
import { CommonBooleanProps, CommonProps } from "@/constants/propsVFormik/propsCommon";

export const FormInputPropsCols = [
  { header: "Name", field: "name" },
  { header: "Type", field: "type", code: true, width: "100px" },
  { header: "Required", field: "required", default: false },
  { header: "Description", field: "description" },
] as IColumn[];
export const FormInputProps = [
  ...CommonProps,
  {
    name: "type",
    type: "string",
    description:
      "The type of the input field (e.g., 'text', 'password', 'email'). Defaults to 'text' if not provided.",
  },
  {
    name: "readonly",
    type: "boolean",
    description: "Determines if the input field is read-only. Defaults to false.",
  },
  ...CommonBooleanProps,
  {
    name: "inputProps",
    type: "object",
    description:
      "Additional props to pass to the input field, such as attributes like 'min', 'max', 'step', etc.",
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
