import maplibregl from 'maplibre-gl';
import { useEffect, useRef, useState } from 'react';
import blueMarker from '../../assets/images/marker-blue.png';
import redMarker from '../../assets/images/marker-red.png';
import { MapServices } from '../../services';
import { MapContainer, MapContent } from './styles';
import { MapProps } from './types';

export const Map = ({ data, balance }: MapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any>(null);
  const [lng] = useState(-46.65649966441811);
  const [lat] = useState(-23.56124140434905);
  const [zoom] = useState(12);
  const API_KEY = 'nny032iKN6rA7I0BqENm';

  const [mapLoad, setMapLoad] = useState(true);

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current as HTMLDivElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });

    map.current.on('load', function () {
      addPointLayer();
    });
    setMapLoad(false);
  }, []);

  useEffect(() => {
    if (!mapLoad) {
      addPointLayer();
    }
  }, [data]);

  useEffect(() => {
    if (!mapLoad) {
      addPointLayer();
    }
  }, [balance]);

  const addPointLayer = () => {
    MapServices(map.current).removeLayer('points', [blueMarker, redMarker]);
    MapServices(map.current).addLayer('points', data, balance, [
      blueMarker,
      redMarker
    ]);
  };

  return (
    <MapContainer className="map-wrap">
      <MapContent ref={mapContainer} className="map" />
    </MapContainer>
  );
};
