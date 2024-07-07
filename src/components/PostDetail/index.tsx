import * as S from './PostDetail.style.ts';

import Map from '@/components/PostDetail/Map';
import PeopleCountTag from '@/components/common/PeopleCountTag';
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg?react';

const PostDetail = () => {
  return (
    <S.PostDetailContainer>
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
      <Map />
      <S.ContentContainer>
        {`경유 가능합니다. \n참고로 저 코로나 걸림요`}
      </S.ContentContainer>
      <S.MoveInfoContainer>
        예상금액<span>6,500원</span> 소요시간 <span>13분</span>
      </S.MoveInfoContainer>
      <S.AuthorContainer>
        <img src={'profile.png'} alt='profile' />
        <span>나는야 오빠 짜누야!!</span>
        <ArrowRightIcon />
      </S.AuthorContainer>
      <S.JoinButton>팟 참여</S.JoinButton>
    </S.PostDetailContainer>
  );
};

export default PostDetail;

const PostDetailHeader = () => {
  return (
    <S.PostDetailHeaderContainer>
      <PeopleCountTag currentPassengers={1} maxPassengers={4} />
      15분 전 • 조회 17
    </S.PostDetailHeaderContainer>
  );
};

const PostDetailTitle = () => {
  return (
    <S.PostDetailTitleContainer>
      <h2>학교 정문에서 터미널까지 오후 1시</h2>
      6월 4일(화) 오후 1:30 쯤 출발
    </S.PostDetailTitleContainer>
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
    <S.LocationInfoContainer>
      <S.LocationInfoHeader>
        <span>{keyWord}</span>
        {title}
      </S.LocationInfoHeader>
      <S.LocationInfoBody>{subTitle}</S.LocationInfoBody>
    </S.LocationInfoContainer>
  );
};
