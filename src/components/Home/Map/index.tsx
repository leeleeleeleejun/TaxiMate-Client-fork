import { useEffect } from 'react';
import { Container as MapDiv, NaverMap, useNavermaps } from 'react-naver-maps';

import getCurrentLocation from '@/utils/getCurrentlocation.ts';

import MarkerContainer from '@/components/common/MarkerContainer';
import { HomeMapProps } from '@/types/props';

const defaultLocation = await getCurrentLocation();
localStorage.setItem('Location', JSON.stringify(defaultLocation));

const Map = ({
  map,
  setMap,
  setActiveButton,
  activeMarker,
  setActiveMarker,
  data,
}: HomeMapProps) => {
  const naverMaps = useNavermaps();

  const centerLocation = JSON.parse(localStorage.getItem('Location') || '');

  const onCenterChangedFunc = () => {
    if (!map) return;
    // 현재 위치 참조
    const { x, y } = map.getCenter();
    localStorage.setItem('Location', JSON.stringify({ lat: y, lng: x }));

    // 내 위치로 이동 버트 비활성화
    setActiveButton(
      map.getCenter().equals(new naverMaps.LatLng(defaultLocation))
    );
  };

  useEffect(() => {
    if (!map) return;
    setActiveButton(
      map.getCenter().equals(new naverMaps.LatLng(defaultLocation))
    );
  }, [map]);

  return (
    <MapDiv
      className={'map-wrapper'}
      onClick={() => {
        setActiveMarker(null);
      }}
    >
      <NaverMap
        defaultCenter={centerLocation}
        defaultZoom={15}
        minZoom={15}
        ref={setMap}
        onCenterChanged={onCenterChangedFunc}
        logoControl={false}
      >
        {data.map((item) => (
          <MarkerContainer
            key={item.id}
            id={item.id}
            position={item.originLocation}
            title={item.destination}
            anchor={[item.destination.length * 6 + 22, 53]}
            showPlace
            activeMarker={activeMarker}
            setActiveMarker={setActiveMarker}
          />
        ))}
      </NaverMap>
    </MapDiv>
  );
};

export default Map;
