import type { IColumn, IRow } from "@/components/core/simpleTable/types";
import { CommonBooleanProps, CommonProps } from "@/constants/propsVFormik/propsCommon.ts";

export const FormContentEditablePropsCols = [
  { header: "Name", field: "name" },
  { header: "Type", field: "type", code: true, width: "150px" },
  { header: "Required", field: "required", default: false },
  { header: "Description", field: "description" },
] as IColumn[];

export const FormContentEditableProps = [
  ...CommonProps,
  ...CommonBooleanProps,
  {
    name: "contentProps",
    type: "object",
    description:
      "Additional props to pass to the contenteditable element, such as attributes like custom data attributes.",
  },
] as IRow[];
