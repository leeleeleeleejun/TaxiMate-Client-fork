import { useLocation, useNavigate } from 'react-router-dom';

import Header from '@/components/common/Layout/Header';
import DropDown from '@/components/common/DropDown.tsx';
import { BackButton } from '@/components/common/Layout/Header/Header.style.ts';

import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';
import { useGetPostByIdQuery } from '@/api/localApi.ts';
import * as S from '@/components/PostDetail/PostDetail.style';

import Map from '@/components/PostDetail/Map';
import PeopleCountTag from '@/components/common/PeopleCountTag';

import LocationInfo from '@/components/common/LocationInfo';
import UserContainer from '@/components/common/UserContainer';
import reformatDate from '@/utils/reformatDate.ts';
import reformatDetailDate from '@/utils/reformatDetailDate.ts';

const PostDetailPage = () => {
  const navigate = useNavigate();
  const id = useLocation().pathname.split('/')[2];
  const { data, isLoading } = useGetPostByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>no data...</div>;
  const formatCreatedAt = reformatDetailDate(data.createdAt);
  return (
    <>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </BackButton>
        <DropDown items={['수정']} danger={'삭제'} />
      </Header>
      <S.PostDetailContainer>
        <PostDetailHeader
          currentParticipants={data.currentParticipants}
          maxParticipants={data.maxParticipants}
          createdAt={formatCreatedAt}
          views={data.views}
        />
        <PostDetailTitle
          title={data.title}
          departureTime={data.departureTime}
        />
        <LocationInfo
          keyWord={'출발지'}
          place={data.origin}
          address={data.originAddress}
        />
        <LocationInfo
          keyWord={'도착지'}
          place={data.destination}
          address={data.destinationAddress}
        />
        <Map taxiRoute={data.taxi.route} />
        <S.ContentContainer>{data.explanation}</S.ContentContainer>
        <S.MoveInfoContainer>
          예상금액<span>{Number(data.taxi.fare).toLocaleString()}원</span>
          소요시간
          <span>{Math.ceil(Number(data.taxi.duration) / 60)}분</span>
        </S.MoveInfoContainer>
        <UserContainer img={data.host.profileImage} name={data.host.nickname} />
        <S.JoinButton>팟 참여</S.JoinButton>
      </S.PostDetailContainer>
    </>
  );
};

export default PostDetailPage;

const PostDetailHeader = ({
  currentParticipants,
  maxParticipants,
  createdAt,
  views,
}: {
  currentParticipants: number;
  maxParticipants: number;
  createdAt: string;
  views: string;
}) => {
  return (
    <S.PostDetailHeaderContainer>
      <PeopleCountTag
        currentParticipants={currentParticipants}
        maxParticipants={maxParticipants}
      />
      {createdAt} • 조회 {views}
    </S.PostDetailHeaderContainer>
  );
};

const PostDetailTitle = ({
  title,
  departureTime,
}: {
  title: string;
  departureTime: string;
}) => {
  const reformatDate1 = reformatDate(departureTime);
  return (
    <S.PostDetailTitleContainer>
      <h2>{title}</h2>
      {reformatDate1} 출발
    </S.PostDetailTitleContainer>
  );
};
