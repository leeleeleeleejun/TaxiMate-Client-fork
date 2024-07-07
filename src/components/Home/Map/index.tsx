import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container as MapDiv, NaverMap, useNavermaps } from 'react-naver-maps';

import { postData } from '@/constants';
import { setActiveMarker } from './MapSlice.ts';
import getCurrentLocation from '@/utils/getCurrentlocation.ts';

import { Main } from './Map.style.ts';
import SearchBar from '@/components/Home/SearchBar';
import ResearchButton from '@/components/Home/ResearchButton';
import MarkerContainer from '@/components/common/MarkerContainer';
import MoveCurrentLocation from '@/components/Home/MoveCurrentLocation';

const defaultLocation = await getCurrentLocation();
localStorage.setItem('Location', JSON.stringify(defaultLocation));

const Map = () => {
  const naverMaps = useNavermaps();
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [activeButton, setActiveButton] = useState<boolean>(true);
  const dispatch = useDispatch();
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

  const myData = postData();

  return (
    <Main>
      <SearchBar />
      <ResearchButton />
      <MoveCurrentLocation map={map} activeButton={activeButton} />
      <MapDiv
        className={'map-wrapper'}
        onClick={() => {
          dispatch(setActiveMarker(null));
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
          {myData.map((item) => (
            <MarkerContainer
              key={item.id}
              id={item.id}
              position={item.originLocation}
              title={item.destination}
              anchor={[item.destination.length * 6 + 22, 53]}
              showPlace={true}
            />
          ))}
        </NaverMap>
      </MapDiv>
    </Main>
  );
};

export default Map;
