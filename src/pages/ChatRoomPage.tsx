import { useLocation, useNavigate } from 'react-router-dom';
import { useGetProfileQuery } from '@/api/localApi.ts';
import useInAppNotificationHandler from '@/hooks/useInAppNotificationHandler.ts';

import Header from '@/components/common/Layout/Header';
import DropDown from '@/components/common/DropDown.tsx';
import { PostBody } from '@/components/common/PostListItem';
import PeopleCountTag from '@/components/common/PeopleCountTag';
import MessageList from '@/components/chatRoom/MessageList.tsx';
import MessageInputBox from '@/components/chatRoom/MessageInputBox.tsx';
import InAppNotification from '@/components/common/InAppNotification';

import { BackButton } from '@/components/common/Layout/Header/Header.style.ts';
import {
  NotificationContainer,
  NotificationHeader,
  RoomTitle,
} from '@/components/chatRoom/chatRoom.style.ts';

import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg?react';

const ChatRoomPage = ({
  sendMessage,
}: {
  sendMessage: (partyId: string, message: string) => void;
}) => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetProfileQuery(null);
  const { notification, showNotification, handleNewMessage } =
    useInAppNotificationHandler();

  const currentPartyId = useLocation().pathname.split('/')[2];

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>no data...</div>;

  return (
    <>
      {notification && (
        <InAppNotification
          showNotification={showNotification}
          partyTitle={notification?.partyTitle || ''}
          partyId={notification?.partyId || 0}
          message={notification?.message || ''}
          sender={{
            profileImage: '',
            nickname: '이준석',
            id: '1',
          }}
          createdAt={''}
        />
      )}
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </BackButton>
        <RoomTitle>
          학생회관 앞 CU앞 종합버스 터미널생회관 앞 CU앞 종합버스 터미널
        </RoomTitle>
        <DropDown
          items={[{ name: '알림끄기', handler: () => {} }]}
          danger={'나가기'}
        />
      </Header>
      <NotificationContainer to={''}>
        <NotificationHeader>
          <PeopleCountTag currentParticipants={4} maxParticipants={4} />
          <ArrowRightIcon />
        </NotificationHeader>
        <PostBody
          departureTime={'오늘 오후 1:10쯤'}
          origin={'공주대학교 정문'}
          destination={'천안종합버스터미널'}
        />
      </NotificationContainer>
      <MessageList
        userId={data.id}
        currentPartyId={currentPartyId}
        inAppNotificationHandler={handleNewMessage}
      />
      <MessageInputBox sendMessage={sendMessage} partyId={currentPartyId} />
    </>
  );
};

export default ChatRoomPage;
