import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container as MapDiv, NaverMap, useNavermaps } from 'react-naver-maps';

import { setActiveMarker } from './MapSlice.ts';
import { postData } from '@/constants';
import getCurrentLocation from '@/utils/getCurrentlocation.ts';

import { Main } from '@/components/Home/Map/Map.style.ts';
import SearchBar from '@/components/Home/SearchBar';
import ResearchButton from '@/components/Home/ResearchButton';
import MarkerContainer from '@/components/common/MarkerContainer';
import MoveCurrentLocation from '@/components/Home/MoveCurrentLocation';

const Map = () => {
  const naverMaps = useNavermaps();
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [activeButton, setActiveButton] = useState<boolean>(false);
  const dispatch = useDispatch();

  //내 위치를 처음으로 설정
  useEffect(() => {
    (async () => {
      const { lat, lng } = await getCurrentLocation();
      setLocation({ lat, lng });
    })();
  }, []);

  const setActiveButtonFunc = () => {
    setActiveButton(!map?.getCenter().equals(new naverMaps.LatLng(location)));
  };

  const myData = postData();

  return (
    <Main>
      <SearchBar />
      <ResearchButton />
      <MoveCurrentLocation
        map={map}
        activeButton={activeButton}
        setLocation={setLocation}
      />
      <MapDiv
        className={'map-wrapper'}
        onClick={() => {
          dispatch(setActiveMarker(null));
        }}
      >
        <NaverMap
          defaultCenter={{ lat: 37.498095, lng: 127.02761 }}
          defaultZoom={15}
          minZoom={13}
          ref={setMap}
          onCenterChanged={setActiveButtonFunc}
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
