import maplibregl, { Map } from 'maplibre-gl';
import { RefObject } from 'react';
import { IMapSource, IMapSourceFeature } from './types';

const API_KEY = import.meta.env.VITE_MAP_KEY;

export class MapService {
  private static instance: MapService;

  public map!: Map;

  public static getInstance(): MapService {
    if (!MapService.instance) {
      MapService.instance = new MapService();
    }

    return MapService.instance;
  }

  public setup(
    mapContainer: RefObject<HTMLDivElement>,
    callbackLoad?: () => void
  ) {
    if (!mapContainer || !mapContainer.current) {
      return;
    }

    const lng = -46.65649966441811;
    const lat = -23.56124140434905;
    const zoom = 12;

    this.map = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });

    this.map.on('load', function () {
      callbackLoad && callbackLoad();
    });
  }

  public addSource<T>(id: string, features: IMapSourceFeature<T>[]) {
    const source: IMapSource<T> = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features
      },
      cluster: true,
      clusterMaxZoom: 14,
      clusterRadius: 50
    };

    this.map.addSource(id, source);
  }

  public removeSource(id: string) {
    const source = this.map.getSource(id);

    if (source) {
      this.map.removeSource(id);
    }
  }

  public addLayer(id: string) {
    this.map.addLayer({
      id,
      type: 'symbol',
      source: id,
      filter: ['!', ['has', 'point_count']],
      layout: {
        'icon-image': ['get', 'icon'],
        'text-allow-overlap': true,
        'text-field': ['get', 'name'],
        'text-font': ['Lato'],
        'text-offset': [0, 1.25],
        'text-anchor': 'top'
      }
    });
  }

  public removeLayer(id: string, markers: unknown[]) {
    const layer = this.map.getLayer(id);

    if (layer) {
      this.map.removeLayer(id);
      this.map.removeLayer(`${id}_clusters`);
      this.map.removeLayer(`${id}_cluster-count`);

      markers.forEach((marker: unknown, index: number) => {
        this.removeMarker(`${id}_${index}`);
      });
    }
  }

  public addClusterLayer(id: string) {
    this.map.addLayer({
      id: `${id}_clusters`,
      type: 'circle',
      source: id,
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': '#50E059',
        'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
      }
    });

    this.map.addLayer({
      id: `${id}_cluster-count`,
      type: 'symbol',
      source: id,
      filter: ['has', 'point_count'],
      layout: {
        'text-field': ['get', 'point_count_abbreviated'],
        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
        'text-size': 12
      }
    });
  }

  public addMarker(id: string, marker: string) {
    this.map.loadImage(marker, (error: unknown, image: unknown) => {
      if (error) {
        throw error;
      }

      this.map.addImage(id, image as HTMLImageElement);
    });
  }

  public removeMarker(id: string) {
    this.map.removeImage(id);
  }
}
