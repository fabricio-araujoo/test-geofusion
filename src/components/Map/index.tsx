import { forwardRef, Ref } from 'react';
import { MapContainer, MapContent } from './styles';
import { MapProps } from './types';

// eslint-disable-next-line react/display-name
export const Map = forwardRef((_props: MapProps, ref: Ref<HTMLDivElement>) => {
  return (
    <MapContainer>
      <MapContent ref={ref} className="map" />
    </MapContainer>
  );
});
