export interface TableProps {
  columns: {
    key: keyof DataType;
    title: string;
    render: (item: any) => JSX.Element;
  }[];
  data: DataType[][];
}

export type DataType = {
  [key: string]: string | number;
};
