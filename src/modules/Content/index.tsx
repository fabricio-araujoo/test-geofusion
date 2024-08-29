import { MapContent } from './Map';
import { TableContent } from './Table';
import { FilterContent } from './Filter';
import { Container, Header } from '../../components';
import { DataContainer } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect } from 'react';
import { MapService } from '../../services/MapService';
import { DataType } from './types';
import { IMapSourceFeature } from '../../services/MapService/types';

import blueMarker from '../../assets/images/marker-blue.png';
import redMarker from '../../assets/images/marker-red.png';
import { filterData } from './helpers';

export const Content = () => {
  const {
    data: { mapReady, data, filter }
  } = useSelector((state: RootState) => state);

  const mapService = MapService.getInstance();

  const { markers: mapPoints } = filterData(data, filter.search);

  useEffect(() => {
    if (!mapReady) {
      return;
    }

    loadLayer();
  }, [mapReady, filter]);

  function loadLayer() {
    const id = 'points';

    const markers = [blueMarker, redMarker];

    mapService.removeLayer(id, markers);
    mapService.removeSource(id);

    const features: IMapSourceFeature<DataType>[] = mapPoints.map((item) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [item.longitude, item.latitude]
      },
      properties: {
        ...item,
        icon: item.revenue >= filter.balance ? `${id}_${0}` : `${id}_${1}`
      }
    }));

    markers.forEach((marker, index) => {
      mapService.addMarker(`${id}_${index}`, marker);
    });

    mapService.addSource<DataType>(id, features);
    mapService.addClusterLayer(id);
    mapService.addLayer(id);
  }

  return (
    <>
      <Header />

      <Container>
        <FilterContent />

        <DataContainer>
          <TableContent />
          <MapContent />
        </DataContainer>
      </Container>
    </>
  );
};
