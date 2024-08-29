import { Feature, SourceSpecification } from 'maplibre-gl';

export type IMapSource<T> = SourceSpecification & {
  data: { type: string; features: IMapSourceFeature<T>[] };
};

export type IMapSourceFeature<T> = {
  type: string;
  geometry: {
    type: string;
    coordinates: number[];
  };
  properties: T & {
    icon: string;
  };
};
