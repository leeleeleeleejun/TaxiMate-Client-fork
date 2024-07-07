import { Container as MapDiv, NaverMap } from 'react-naver-maps';
import { useState } from 'react';
import { usePolylinePathData } from '@/constants';

const Map = () => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const polylinePath = usePolylinePathData();

  map &&
    new naver.maps.Polyline({
      map: map,
      path: polylinePath,
    });
  return (
    <MapDiv className={'map-wrapper'}>
      <NaverMap
        ref={setMap}
        defaultCenter={{ lat: 37.359924641705476, lng: 127.1148204803467 }}
        defaultZoom={14}
        minZoom={14}
        logoControl={false}
      ></NaverMap>
    </MapDiv>
  );
};

export default Map;
