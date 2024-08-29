export interface MapProps {
  data?: DataType;
  filter?: string;
  balance?: number;
}

export type DataType = {
  name: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  revenue: number;
}[];
