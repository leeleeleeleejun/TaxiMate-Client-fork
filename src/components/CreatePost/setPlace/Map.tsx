import { useSelector } from 'react-redux';
import { Container as MapDiv, NaverMap } from 'react-naver-maps';

import { RootState } from '@/store';
import useLocationPathPlace from '@/hooks/useLocationPathPlace.ts';

import {
  Main,
  MarkerContainer,
} from '@/components/CreatePost/setPlace/setPlace.style.ts';

const Marker = ({ content }: { content: string }) => {
  return (
    <MarkerContainer>
      <div className='marker-icon-container'>
        <div className='marker-content-box'>{content}</div>
        <div className='marker-bottom-triangle'></div>
      </div>
    </MarkerContainer>
  );
};

const Map = () => {
  const path = useLocationPathPlace();

  const content = path ? '출발' : '도착';

  const originLocationValue = useSelector(
    (state: RootState) => state.createPostSlice.originLocation
  );

  const destinationLocation = useSelector(
    (state: RootState) => state.createPostSlice.destinationLocation
  );

  return (
    <Main>
      <Marker content={content} />
      <MapDiv className={'map-wrapper'}>
        <NaverMap
          defaultCenter={path ? originLocationValue : destinationLocation}
          defaultZoom={15}
          minZoom={15}
          logoControl={false}
        ></NaverMap>
      </MapDiv>
    </Main>
  );
};

export default Map;
