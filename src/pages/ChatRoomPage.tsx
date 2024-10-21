import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GroupMessage } from '@/types/chat.ts';
import { CLIENT_PATH } from '@/constants/path.ts';
import reformatDate from '@/utils/reformatDate.ts';
import { useGetChatQuery, useGetProfileQuery } from '@/api/localApi.ts';
import useInAppNotificationHandler from '@/hooks/useInAppNotificationHandler.ts';

import Header from '@/components/common/Layout/Header';
import { PostBody } from '@/components/common/PostListItem';
import PeopleCountTag from '@/components/common/PeopleCountTag';
import MessageList from '@/components/ChatRoom/MessageList.tsx';
import MessageInputBox from '@/components/ChatRoom/MessageInputBox.tsx';
import InAppNotification from '@/components/common/InAppNotification';
import MyMessageBox from '@/components/ChatRoom/MyMessageBox.tsx';
import OthersMessageBox from '@/components/ChatRoom/OthersMessageBox.tsx';

import { BackButton } from '@/components/common/Layout/Header/Header.style.ts';
import {
  NotificationContainer,
  NotificationHeader,
  RoomTitle,
  SystemMessage,
} from '@/components/ChatRoom/chatRoom.style.ts';

import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg?react';
import LoadingIcon from '@/components/common/LoadingIcon';

const ChatRoomPage = ({
  sendMessage,
  checkReceive,
}: {
  sendMessage: (partyId: string, message: string) => void;
  checkReceive: (partyId: string, chatId: string) => void;
}) => {
  const navigate = useNavigate();
  const currentPartyId = useLocation().pathname.split('/')[2];

  const { data: userData, isLoading } = useGetProfileQuery(null);
  const { data: chatData, isLoading: chatIsLoading } = useGetChatQuery(
    currentPartyId,
    { refetchOnFocus: true }
  );
  const {
    notification,
    showNotification,
    handleNewMessage,
    setShowNotification,
  } = useInAppNotificationHandler();

  const [initialChatMessage, setInitialChatMessage] = useState<GroupMessage[]>(
    []
  );

  useEffect(() => {
    if (!chatData) return;

    const array: GroupMessage[] = [];
    let currentDate = '';

    chatData.chats.forEach((message) => {
      const messageDate = formatDate(message.createdAt);

      if (messageDate !== currentDate) {
        currentDate = messageDate;
        array.push({
          chat: [currentDate],
          createdAt: '',
          sender: null,
          type: 'SYSTEM',
        });
      }

      const lastMessage = array[array.length - 1];
      const isSameUser = lastMessage.sender?.id === message.sender?.id;
      const isSameTime =
        lastMessage.createdAt.slice(0, 16) === message.createdAt?.slice(0, 16);
      const isSameType = lastMessage.type === message.type;

      if (isSameType && isSameUser && isSameTime) {
        // 이전 메시지와 같은 유저, 같은 시간대의 메시지라면 chat 배열에 추가
        lastMessage.chat.push(message.message);
      } else {
        // 새로운 유저이거나 시간이 다르면 새로운 그룹 추가
        array.push({ ...message, chat: [message.message] });
      }
    });

    setInitialChatMessage(array);
  }, [chatData]);

  if (isLoading || chatIsLoading) return <LoadingIcon />;
  if (!userData || !chatData) return <div>no data...</div>;

  return (
    <>
      {notification && (
        <InAppNotification
          id={notification.id}
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
          type={'MESSAGE'}
          setShowNotification={() => {
            setShowNotification(false);
          }}
        />
      )}
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </BackButton>
        <RoomTitle>{chatData.party.title}</RoomTitle>
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
        initialChatMessage={initialChatMessage}
        checkReceive={checkReceive}
      >
        {initialChatMessage.map((message) =>
          message.type === 'SYSTEM' ? (
            message.chat.map((item, index) => (
              <SystemMessage key={index}>{item}</SystemMessage>
            ))
          ) : message.sender?.id === userData.id ? (
            <MyMessageBox
              key={message.createdAt}
              messages={message.chat}
              time={message.createdAt}
            />
          ) : (
            <OthersMessageBox
              key={message.createdAt}
              name={message.sender?.nickname || 'user'}
              img={message.sender?.profileImage || ''}
              messages={message.chat}
              time={message.createdAt}
            />
          )
        )}
      </MessageList>
      <MessageInputBox sendMessage={sendMessage} partyId={currentPartyId} />
    </>
  );
};

export default ChatRoomPage;

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
  return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
};
