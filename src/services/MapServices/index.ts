import { DataType } from './types';

export const MapServices = (map: any) => {
  const addLayer = (
    id: string,
    features: DataType,
    balance: number,
    customMarker?: any
  ) => {
    customMarker.forEach((marker: any, index: number) => {
      map.loadImage(marker, (error: any, image: any) => {
        if (error) throw error;

        // Add the image to the map style.
        map.addImage(`${id}_${index}`, image);
      });
    });

    map.addSource(id, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: features.map(({ latitude, longitude, ...props }) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          properties: {
            ...props,
            icon: props.revenue >= balance ? `${id}_${0}` : `${id}_${1}`
          }
        }))
      },
      cluster: true,
      clusterMaxZoom: 14, // Max zoom to cluster points on
      clusterRadius: 50
    });

    map.addLayer({
      id: `${id}_clusters`,
      type: 'circle',
      source: id,
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': '#50E059',
        'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
      }
    });

    map.addLayer({
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

    // Add a symbol layer
    map.addLayer({
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
  };

  const removeLayer = (id: string, markers: any[]) => {
    const layer = map.getLayer(id);
    const source = map.getSource(id);

    if (layer) {
      map.removeLayer(id);
      map.removeLayer(`${id}_clusters`);
      map.removeLayer(`${id}_cluster-count`);
      markers.forEach((marker: any, index: number) => {
        map.removeImage(`${id}_${index}`);
      });
    }
    if (source) map.removeSource(id);
  };

  const getLayer = (id: string) => {
    return map.getLayer(id);
  };

  return { addLayer, removeLayer, getLayer };
};
