import {
  AuthorContainer,
  ContentContainer,
  JoinButton,
  LocationInfoBody,
  LocationInfoContainer,
  LocationInfoHeader,
  MoveInfoContainer,
  PostDetailContainer,
  PostDetailHeaderContainer,
  PostDetailTitleContainer,
} from '@/components/PostDetail/PostDetail.style.ts';
import PeopleCountTag from '@/components/common/PeopleCountTag';
import { Container as MapDiv, NaverMap } from 'react-naver-maps';
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg?react';

const PostDetail: React.FC = () => {
  return (
    <PostDetailContainer>
      <PostDetailHeader />
      <PostDetailTitle />
      <LocationInfo
        keyWord={'출발지'}
        title={'공주대 공과대학'}
        subTitle={'충남 천안시 서북구 천안대로 1223-24'}
      />
      <LocationInfo
        keyWord={'도착지'}
        title={'두정역'}
        subTitle={'충남 천안시 서북구 천안대로 1223-24'}
      />
      <MapDiv className={'map-wrapper'}>
        <NaverMap defaultZoom={15} minZoom={15} logoControl={false}></NaverMap>
      </MapDiv>
      <ContentContainer>
        {`경유 가능합니다. \n참고로 저 코로나 걸림요`}
      </ContentContainer>
      <MoveInfoContainer>
        예상금액<span>6,500원</span> 소요시간 <span>13분</span>
      </MoveInfoContainer>
      <AuthorContainer>
        <img src={'profile.png'} alt='profile' />
        <span>나는야 오빠 짜누야!!</span>
        <ArrowRightIcon />
      </AuthorContainer>
      <JoinButton>팟 참여</JoinButton>
    </PostDetailContainer>
  );
};

export default PostDetail;

const PostDetailHeader = () => {
  return (
    <PostDetailHeaderContainer>
      <PeopleCountTag currentPassengers={1} maxPassengers={4} />
      15분 전 • 조회 17
    </PostDetailHeaderContainer>
  );
};

const PostDetailTitle = () => {
  return (
    <PostDetailTitleContainer>
      <h2>학교 정문에서 터미널까지 오후 1시</h2>
      6월 4일(화) 오후 1:30 쯤 출발
    </PostDetailTitleContainer>
  );
};

const LocationInfo = ({
  keyWord,
  title,
  subTitle,
}: {
  keyWord: string;
  title: string;
  subTitle: string;
}) => {
  return (
    <LocationInfoContainer>
      <LocationInfoHeader>
        <span>{keyWord}</span>
        {title}
      </LocationInfoHeader>
      <LocationInfoBody>{subTitle}</LocationInfoBody>
    </LocationInfoContainer>
  );
};
