import { useMessageSubscription } from '@/hooks/useMessageSubscription.ts';
import { ChatMessage, ChatRoom } from '@/types/chat.ts';

import Header from '@/components/common/Layout/Header';
import { HeaderItem } from '@/components/common/Layout/Header/Header.style.ts';
import { Container } from '@/components/chatList/chatList.style.ts';
import Footer from '@/components/common/Layout/Footer';
import ChatListItem from '@/components/chatList/ChatListItem.tsx';

import ChatIcon from '@/assets/icons/chat/chat-icon.svg?react';
import { useGetChatListQuery } from '@/api/localApi.ts';
import { useState } from 'react';

const aa = [
  {
    id: 1,
    title: '테스트',
    maxParticipants: 3, // 최대 참여자 수
    currentParticipants: 1, // 현재 참여자 수
    isProgress: true,
    recentMessage: '안녕',
    recentMessageTime: '2024-09-24T11:23:41.375090153',
    unreadCount: 1,
  },
  {
    id: 2,
    title: '테스트2',
    maxParticipants: 3, // 최대 참여자 수
    currentParticipants: 1, // 현재 참여자 수
    isProgress: true,
    recentMessage: '안녕',
    recentMessageTime: '2024-09-22T11:23:41.375090153',
    unreadCount: 299,
  },
  {
    id: 3,
    title: '테스트2',
    maxParticipants: 3, // 최대 참여자 수
    currentParticipants: 1, // 현재 참여자 수
    isProgress: true,
    recentMessage: '안녕',
    recentMessageTime: '2024-09-22T11:23:41.375090153',
    unreadCount: 300,
  },
];
const ChatListPage = () => {
  const { data, isLoading } = useGetChatListQuery(null);
  const [chatRoomList, setChatRoomList] = useState<ChatRoom[] | undefined>(aa);

  const handleNewMessage = (message: ChatMessage) => {
    setChatRoomList((prevList) => {
      if (!prevList) return prevList;

      const targetIndex = prevList.findIndex(
        (chatRoom) => chatRoom.id === message.partyId
      );
      if (targetIndex === -1) return prevList;

      const updatedRoom = {
        ...prevList[targetIndex],
        recentMessage: message.message,
        recentMessageTime: message.createdAt,
        unreadCount: prevList[targetIndex].unreadCount + 1,
      };

      return [
        updatedRoom,
        ...prevList.slice(0, targetIndex),
        ...prevList.slice(targetIndex + 1),
      ];
    });
  };

  useMessageSubscription(handleNewMessage);
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (!chatRoomList) return <div>no data...</div>;

  return (
    <>
      <Header>
        <HeaderItem>
          채팅
          <ChatIcon />
        </HeaderItem>
      </Header>
      <Container>
        {chatRoomList.map((item) => (
          <ChatListItem
            key={item.id}
            title={item.title}
            currentParticipants={item.currentParticipants}
            maxParticipants={item.maxParticipants}
            recentMessage={item.recentMessage}
            recentMessageTime={item.recentMessageTime}
            unreadCount={item.unreadCount}
            isProgress={item.isProgress}
            id={item.id}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
};
export default ChatListPage;
