import type { IColumn, IRow } from "@/components/core/simpleTable/types";
import { CommonBooleanProps, CommonProps } from "@/constants/propsVFormik/propsCommon";

export const FormTextareaPropsCols = [
  { header: "Name", field: "name" },
  { header: "Type", field: "type", code: true, width: "150px" },
  { header: "Required", field: "required", default: false },
  { header: "Description", field: "description" },
] as IColumn[];

export const FormTextareaProps = [
  ...CommonProps,
  {
    name: "rows",
    type: "number | string",
    description: "The number of rows to display in the textarea. Defaults to 3 if not provided.",
  },
  ...CommonBooleanProps,
  {
    name: "inputProps",
    type: "object",
    description:
      "Additional props to pass to the input field, such as attributes like custom data attributes, etc.",
  },
] as IRow[];
