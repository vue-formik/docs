interface IColumn {
  header: string;
  field: string;
  code?: boolean;
  align?: "start" | "justify" | "end" | "center";
}
interface IRow {
  [key: string]: string | boolean;
}
interface IClasses {
  root?: string;
  table?: string;
  thead?: string;
  tbody?: string;
  tr?: string;
  th?: string;
  td?: string;
}

interface Props {
  columns: IColumn[];
  rows: IRow[];
  classes?: IClasses;
  minWidth?: number;
}

export type { IColumn, IRow, IClasses, Props };
