import { useLocation, useNavigate } from 'react-router-dom';
import { useGetChatQuery, useGetProfileQuery } from '@/api/localApi.ts';
import useInAppNotificationHandler from '@/hooks/useInAppNotificationHandler.ts';
import { CLIENT_PATH } from '@/constants/path.ts';
import reformatDate from '@/utils/reformatDate.ts';

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
  const currentPartyId = useLocation().pathname.split('/')[2];
  const { data: userData, isLoading } = useGetProfileQuery(null);
  const { data: chatData, isLoading: chatIsLoading } =
    useGetChatQuery(currentPartyId);
  const { notification, showNotification, handleNewMessage } =
    useInAppNotificationHandler();

  if (isLoading || chatIsLoading) return <div>Loading...</div>;
  if (!userData || !chatData) return <div>no data...</div>;

  return (
    <>
      {notification && (
        <InAppNotification
          showNotification={showNotification}
          partyTitle={notification?.partyTitle || ''}
          partyId={notification?.partyId || 0}
          message={notification?.message || ''}
          sender={{
            profileImage: notification.sender.profileImage || '',
            nickname: notification.sender.nickname || '',
            id: notification.sender.id,
          }}
          createdAt={''}
          type={''}
        />
      )}
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </BackButton>
        <RoomTitle>{chatData.party.title}</RoomTitle>
        <DropDown
          items={[{ name: '알림끄기', handler: () => {} }]}
          danger={'나가기'}
        />
      </Header>
      <NotificationContainer
        to={CLIENT_PATH.POST_DETAIL.replace(':postId', currentPartyId)}
      >
        <NotificationHeader>
          <PeopleCountTag
            currentParticipants={chatData.party.currentParticipants}
            maxParticipants={chatData.party.maxParticipants}
          />
          <ArrowRightIcon />
        </NotificationHeader>
        <PostBody
          departureTime={reformatDate(chatData.party.departureTime) || ''}
          origin={chatData.party.origin || ''}
          destination={chatData.party.destination || ''}
        />
      </NotificationContainer>
      <MessageList
        userId={userData.id}
        currentPartyId={currentPartyId}
        inAppNotificationHandler={handleNewMessage}
        chatData={chatData.chat}
      />
      <MessageInputBox sendMessage={sendMessage} partyId={currentPartyId} />
    </>
  );
};

export default ChatRoomPage;
