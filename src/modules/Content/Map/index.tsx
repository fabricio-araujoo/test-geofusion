import { useEffect, useRef } from 'react';
import { Map } from '../../../components';
import { MapService } from '../../../services/MapService';
import { useDispatch } from 'react-redux';
import { setMapReady } from '../../../reducer';

export function MapContent() {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const mapService = MapService.getInstance();

    mapService.setup(mapContainerRef, onLoad);
  }, []);

  function onLoad() {
    dispatch(setMapReady());
  }

  return <Map ref={mapContainerRef} />;
}
