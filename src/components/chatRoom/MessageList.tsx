import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChatMessage, GroupMessage } from '@/types/chat.ts';
import { useMessageSubscription } from '@/hooks/useMessageSubscription.ts';

import MyMessageBox from '@/components/chatRoom/MyMessageBox.tsx';
import OthersMessageBox from '@/components/chatRoom/OthersMessageBox.tsx';
import {
  MessageListContainer,
  SystemMessage,
} from '@/components/chatRoom/chatRoom.style.ts';
import GoNewMessageButton from '@/components/chatRoom/GoNewMessageButton.tsx';

const MessageList = ({
  userId,
  currentPartyId,
  inAppNotificationHandler,
  initialChatMessage,
  checkReceive,
  children,
}: {
  userId: string;
  currentPartyId: string;
  inAppNotificationHandler: (message: ChatMessage) => void;
  initialChatMessage: GroupMessage[];
  checkReceive: (partyId: string, chatId: string) => void;
  children: ReactNode;
}) => {
  const messageEndRef = useRef<HTMLDivElement>(null);
  const [messageList, setMessageList] = useState<GroupMessage[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showUpButton, setShowUpButton] = useState(false);
  const messageListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let previousHeight = window.visualViewport?.height || window.innerHeight;

    const handleVisualViewPortResize = () => {
      if (!messageListRef.current) return;

      const currentHeight = window.visualViewport?.height || window.innerHeight;
      const currentScrollTop = messageListRef.current.scrollTop;
      const maxScrollTop =
        messageListRef.current.scrollHeight -
        messageListRef.current.clientHeight;

      // 스크롤이 맨 아래에 있는지 여부 확인
      const isAtBottom = currentScrollTop >= maxScrollTop;

      if (isAtBottom) {
        // 맨 아래에 있었다면, 키보드가 내려갈 때 다시 맨 아래로 스크롤
        messageListRef.current.scrollTop =
          messageListRef.current.scrollHeight -
          messageListRef.current.clientHeight;
      } else {
        // 스크롤 위치를 높이 변화에 따라 보정
        messageListRef.current.scrollTop += previousHeight - currentHeight;
      }

      // 이전 높이 갱신
      previousHeight = currentHeight;
    };

    // 이벤트 리스너 추가
    window.visualViewport?.addEventListener(
      'resize',
      handleVisualViewPortResize
    );

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      window.visualViewport?.removeEventListener(
        'resize',
        handleVisualViewPortResize
      );
    };
  }, [messageListRef]);

  const handleNewMessage = (message: ChatMessage) => {
    if (message.partyId === Number(currentPartyId)) {
      chatHandler(message, setMessageList);
      if (message.sender.id !== userId) {
        checkReceive(currentPartyId, message.id);
      }
    } else {
      inAppNotificationHandler(message);
    }
  };

  useMessageSubscription(handleNewMessage);

  useLayoutEffect(() => {
    if (!messageEndRef.current) return; // Ref가 없으면 아무 작업도 하지 않음

    const isLastMessageMine =
      messageList.length > 0 &&
      messageList[messageList.length - 1].sender?.id === userId;

    if (isVisible || isLastMessageMine) {
      // 요소가 보이거나 마지막 메시지가 내 메시지일 경우
      // messageEndRef.current.scrollIntoView();
      if (messageListRef.current) {
        messageListRef.current.scrollTop =
          messageListRef.current.scrollHeight || 0;
      }
    } else {
      // 새로운 메시지가 있고 마지막 메시지가 다른 유저일 경우
      setShowUpButton(true);
    }
  }, [messageList]);

  // Intersection Observer를 사용해 요소 가시성 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentRef = messageEndRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setShowUpButton(false);
    }
  }, [isVisible]);

  useEffect(() => {
    // if (messageEndRef.current) {
    //   messageEndRef.current.scrollIntoView();
    // }
    if (messageListRef.current) {
      messageListRef.current.scrollTop =
        messageListRef.current.scrollHeight || 0;
    }
  }, [initialChatMessage]);

  return (
    <>
      <MessageListContainer ref={messageListRef}>
        {children}
        {messageList.map((message) =>
          message.type === 'SYSTEM' ? (
            message.chat.map((item) => <SystemMessage>{item}</SystemMessage>)
          ) : message.sender?.id === userId ? (
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
        <div ref={messageEndRef} style={{ height: '2px' }} />
      </MessageListContainer>
      {showUpButton && messageList.length > 0 && (
        <GoNewMessageButton
          img={messageList[messageList.length - 1].sender?.profileImage || ''}
          name={messageList[messageList.length - 1].sender?.nickname || ''}
          message={
            messageList[messageList.length - 1].chat[
              messageList[messageList.length - 1].chat.length - 1
            ]
          }
          onClick={() => {
            if (messageListRef.current) {
              messageListRef.current.scrollTop =
                messageListRef.current.scrollHeight || 0;
            }
            // messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      )}
    </>
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
      const isSameUser = lastMessage.sender?.id === message.sender.id;
      const isSameTime =
        lastMessage.createdAt.slice(0, 16) === message.createdAt?.slice(0, 16);
      const isSameType = lastMessage.type === message.type;

      if (isSameType && isSameUser && isSameTime) {
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
