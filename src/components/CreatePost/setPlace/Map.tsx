import { Container as MapDiv, NaverMap } from 'react-naver-maps';
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
  return (
    <Main>
      <Marker content={'출발'} />
      <MapDiv className={'map-wrapper'}>
        <NaverMap defaultZoom={15} minZoom={15} logoControl={false}></NaverMap>
      </MapDiv>
    </Main>
  );
};

export default Map;
