import { useLayoutEffect, useRef, useState } from 'react';
import { ChatMessage, GroupMessage } from '@/types/chat.ts';
import { useMessageSubscription } from '@/hooks/useMessageSubscription.ts';

import MyMessageBox from '@/components/chatRoom/MyMessageBox.tsx';
import OthersMessageBox from '@/components/chatRoom/OthersMessageBox.tsx';
import {
  Container,
  SystemMessage,
} from '@/components/chatRoom/chatRoom.style.ts';

const MessageList = ({
  userId,
  currentPartyId,
  inAppNotificationHandler,
}: {
  userId: string;
  currentPartyId: string;
  inAppNotificationHandler: (message: ChatMessage) => void;
}) => {

  const messageEndRef = useRef<HTMLDivElement>(null);
  const [messageList, setMessageList] = useState<GroupMessage[]>([]);

  const handleNewMessage = (message: ChatMessage) => {
    console.log('New message in ChatRoomPage:', message);
    if (message.partyId === Number(currentPartyId)) {
      chatHandler(message, setMessageList);
    } else {
      inAppNotificationHandler(message);
    }
  };

  useMessageSubscription(handleNewMessage);


  useLayoutEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageList]);

  return (
    <Container>
      <SystemMessage>이준석님이 들어왔습니다.</SystemMessage>
      <SystemMessage>2024년 9월 21일 토요일</SystemMessage>
      {messageList.map((message) =>
        message.sender.id === userId ? (
          <MyMessageBox
            key={message.createdAt}
            messages={message.chat}
            time={message.createdAt}
          />
        ) : (
          <OthersMessageBox
            key={message.createdAt}
            name={message.sender.nickname}
            img={message.sender.profileImage}
            messages={message.chat}
            time={message.createdAt}
          />
        )
      )}
      <div ref={messageEndRef} />
    </Container>
  );
};

export default MessageList;

const chatHandler = (
  message: ChatMessage,
  setMessageList: React.Dispatch<React.SetStateAction<GroupMessage[]>>
) => {
  const setMessage = { ...message, chat: [message.message] };

  setMessageList((prevState) => {
    if (prevState.length > 0) {
      const lastMessage = prevState[prevState.length - 1];
      const isSameUser = lastMessage.sender.id === message.sender.id;
      const isSameTime =
        lastMessage.createdAt.slice(0, 16) === message.createdAt?.slice(0, 16);

      if (isSameUser && isSameTime) {
        const updatedMessage = {
          ...lastMessage,
          chat: [...lastMessage.chat, ...setMessage.chat],
        };
        return [...prevState.slice(0, prevState.length - 1), updatedMessage];
      }
    }
    return [...prevState, setMessage];
  });
};
