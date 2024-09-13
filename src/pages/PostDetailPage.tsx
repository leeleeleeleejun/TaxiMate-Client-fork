import { useLocation, useNavigate } from 'react-router-dom';

import {
  useGetPostByIdQuery,
  useParticipationChatMutation,
} from '@/api/localApi.ts';
import { CLIENT_PATH } from '@/constants/path.ts';
import reformatDate from '@/utils/reformatDate.ts';
import reformatDetailDate from '@/utils/reformatDetailDate.ts';
import { PostDetailStatus } from '@/types/post.ts';

import Header from '@/components/common/Layout/Header';
import DropDown from '@/components/common/DropDown.tsx';
import { BackButton } from '@/components/common/Layout/Header/Header.style.ts';
import Map from '@/components/PostDetail/Map';
import PeopleCountTag from '@/components/common/PeopleCountTag';
import LocationInfo from '@/components/common/LocationInfo';
import UserContainer from '@/components/common/UserContainer';
import * as S from '@/components/PostDetail/PostDetail.style';

import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';

const PostDetailPage = () => {
  const navigate = useNavigate();
  const id = useLocation().pathname.split('/')[2];
  const { data, isLoading, refetch } = useGetPostByIdQuery(id);
  const [participationChat, { error }] = useParticipationChatMutation();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>no data...</div>;

  if (error) {
    if ('status' in error) {
      let errMsg = '';

      if ('data' in error) {
        const errorData = error.data as {
          message: string;
        };
        errMsg = errorData.message;
      } else {
        errMsg = 'error' in error ? error.error : 'An unknown error occurred';
      }

      alert(errMsg);
    }
  }

  const clickUpdateHandler = () => {
    if (data.currentParticipants > 1) {
      navigate(CLIENT_PATH.UPDATE_POST.replace(':postId', id));
    } else {
      alert('이미 참여자가 존재하여 정보가 수정되지 않습니다');
    }
  };

  const participationChatHandler = async () => {
    const result = await participationChat(data.id).unwrap();
    alert(result.message);
    refetch();
    // TODO: 채팅방으로 이동 로직 추가
  };

  const formatCreatedAt = reformatDetailDate(data.createdAt);
  return (
    <>
      <Header>
        <BackButton onClick={() => navigate('/')}>
          <ArrowLeftIcon />
        </BackButton>
        {data.host.isMe && (
          <DropDown
            items={[{ name: '수정', handler: clickUpdateHandler }]}
            danger={'삭제'}
          />
        )}
      </Header>
      <S.PostDetailContainer>
        <PostDetailHeader
          currentParticipants={data.currentParticipants}
          maxParticipants={data.maxParticipants}
          status={data.status}
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
        <S.JoinButton onClick={participationChatHandler}>팟 참여</S.JoinButton>
      </S.PostDetailContainer>
    </>
  );
};

export default PostDetailPage;

const PostDetailHeader = ({
  currentParticipants,
  maxParticipants,
  status,
  createdAt,
  views,
}: {
  currentParticipants: number;
  maxParticipants: number;
  status: PostDetailStatus;
  createdAt: string;
  views: string;
}) => {
  return (
    <S.PostDetailHeaderContainer>
      <div>
        <PeopleCountTag
          currentParticipants={currentParticipants}
          maxParticipants={maxParticipants}
        />
        {status === 'PARTICIPATING' && (
          <S.ParticipationTag>참여중인 팟</S.ParticipationTag>
        )}
        {status === 'TERMINATED' && <S.CloseTag>종료된 팟</S.CloseTag>}
      </div>
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
