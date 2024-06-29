import { useEffect, useState } from 'react';
import { Container as MapDiv, NaverMap, useNavermaps } from 'react-naver-maps';

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
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

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
          setActiveMarker(null);
        }}
      >
        <NaverMap
          defaultCenter={{ lat: 37.498095, lng: 127.02761 }}
          defaultZoom={15}
          minZoom={13}
          ref={setMap}
          onCenterChanged={setActiveButtonFunc}
        >
          {myData.line.map((input) => (
            <MarkerContainer
              key={input.station}
              position={input.code}
              title={input.station}
              activeMarker={activeMarker}
              setActiveMarker={setActiveMarker}
            />
          ))}
        </NaverMap>
      </MapDiv>
    </Main>
  );
};

export default Map;

const myData = {
  line: [
    { order: 11, station: '잠실새내', code: [37.511687, 127.086162] },
    { order: 23, station: '종합운동장', code: [37.510997, 127.073642] },
    { order: 1456, station: '삼성', code: [37.508844, 127.06316] },
    { order: 71, station: '선릉', code: [37.504503, 127.049008] },
    { order: 1341, station: '역삼', code: [37.500622, 127.036456] },
    { order: 65, station: '강남', code: [37.498095, 127.02761] },
    { order: 333, station: '교대', code: [37.493415, 127.01408] },
    { order: 575, station: '방배', code: [37.481426, 126.997596] },
    { order: 3, station: '사당', code: [37.47653, 126.981685] },
    { order: 578, station: '신대방', code: [37.487462, 126.913149] },
    {
      order: 976,
      station: '구로디지털단지',
      code: [37.485266, 126.901401],
    },
    { order: 1343, station: '신도림', code: [37.508725, 126.891295] },
    { order: 2345, station: '문래', code: [37.517933, 126.89476] },
  ],
};
