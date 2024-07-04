import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container as MapDiv, NaverMap, useNavermaps } from 'react-naver-maps';

import { setActiveMarker, setCenterLocation } from './MapSlice.ts';
import { postData } from '@/constants';
import getCurrentLocation from '@/utils/getCurrentlocation.ts';

import { Main } from '@/components/Home/Map/Map.style.ts';
import SearchBar from '@/components/Home/SearchBar';
import ResearchButton from '@/components/Home/ResearchButton';
import MarkerContainer from '@/components/common/MarkerContainer';
import MoveCurrentLocation from '@/components/Home/MoveCurrentLocation';

const defaultLocation = await getCurrentLocation();

const Map = () => {
  const naverMaps = useNavermaps();
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [activeButton, setActiveButton] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCenterLocation(defaultLocation));
  }, []);

  const onCenterChangedFunc = () => {
    if (!map) return;
    // 현재 위치 참조
    const { x, y } = map.getCenter();
    dispatch(setCenterLocation({ lat: y, lng: x }));

    // 내 위치로 이동 버트 비활성화
    setActiveButton(
      !map.getCenter().equals(new naverMaps.LatLng(defaultLocation))
    );
  };

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
          defaultCenter={defaultLocation}
          defaultZoom={15}
          minZoom={15}
          ref={setMap}
          onCenterChanged={onCenterChangedFunc}
        >
          {myData.map((item) => (
            <MarkerContainer
              key={item.id}
              id={item.id}
              position={item.originLocation}
              title={item.destination}
            />
          ))}
        </NaverMap>
      </MapDiv>
    </Main>
  );
};

export default Map;
