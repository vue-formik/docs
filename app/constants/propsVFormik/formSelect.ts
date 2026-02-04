import type { IColumn, IRow } from "@/components/core/simpleTable/types.ts";
import { CommonBooleanProps, CommonProps } from "@/constants/propsVFormik/propsCommon.ts";

export const FormSelectPropsCols = [
  { header: "Name", field: "name" },
  { header: "Type", field: "type", code: true, width: "150px" },
  { header: "Required", field: "required", default: false },
  { header: "Description", field: "description" },
] as IColumn[];

export const FormSelectProps = [
  ...CommonProps,
  {
    name: "options",
    type: "Array<{ label: string; value: string | number }>",
    description:
      "An array of objects representing the selectable options. Each object should have a 'label' and 'value' property.",
  },
  ...CommonBooleanProps,
  {
    name: "inputProps",
    type: "object",
    description:
      "Additional props to pass to the input field, such as attributes like data attributes, etc.",
  },
] as IRow[];
