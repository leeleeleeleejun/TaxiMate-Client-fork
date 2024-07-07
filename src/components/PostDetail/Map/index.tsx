import { useState } from 'react';
import { Container as MapDiv, NaverMap } from 'react-naver-maps';

import { usePolylinePathData } from '@/constants';
import MarkerContainer from '@/components/common/MarkerContainer';

const Map = () => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const polylinePath = usePolylinePathData();

  map &&
    new naver.maps.Polyline({
      map: map,
      path: polylinePath,
    });

  const markerPlaces = [polylinePath[0], polylinePath[polylinePath.length - 1]];

  return (
    <MapDiv className={'map-wrapper'}>
      <NaverMap
        ref={setMap}
        defaultCenter={{ lat: 37.359924641705476, lng: 127.1148204803467 }}
        defaultZoom={14}
        minZoom={14}
        logoControl={false}
      >
        {markerPlaces.map((item, index) => (
          <MarkerContainer
            id={index === 0 ? 'origin' : 'destination'}
            position={{ longitude: item.x, latitude: item.y }}
            title={index === 0 ? '출발' : '도착'}
            anchor={[22, 53]}
            showPlace={false}
          />
        ))}
      </NaverMap>
    </MapDiv>
  );
};

export default Map;
