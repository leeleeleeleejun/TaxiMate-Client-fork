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
import useVisualViewport from '@/hooks/useVisualViewport.ts';

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
  const { height: viewportHeight, heightDifference } = useVisualViewport();
  const lastScrollHeight = useRef(0);
  const lastScrollTop = useRef(0);
  const isAtBottomRef = useRef(true);

  useEffect(() => {
    if (!messageListRef.current) return;

    const currentScrollHeight = messageListRef.current.scrollHeight;
    const currentScrollTop = messageListRef.current.scrollTop;
    const clientHeight = messageListRef.current.clientHeight;

    // 사용자 에이전트를 확인하여 웹뷰인지 판단하는 함수
    const isWebView = () => {
      const userAgent = navigator.userAgent || navigator.vendor;

      // iOS WebView
      if (/iPhone|iPod|iPad/.test(userAgent)) {
        return /CriOS|FxiOS|Safari/.test(userAgent) === false;
      }

      // Android WebView
      return /wv|Android.*Version\/[\d.]+.*Chrome/.test(userAgent);
    };

    // 웹뷰일 경우 더 큰 오차값을 적용
    const scrollThreshold = isWebView() ? 20 : 10;

    isAtBottomRef.current =
      currentScrollTop + clientHeight >= currentScrollHeight - scrollThreshold;

    if (isAtBottomRef.current) {
      messageListRef.current.scrollTop = currentScrollHeight - clientHeight;
    } else if (heightDifference !== 0) {
      // 키보드가 나타나거나 사라질 때 스크롤 위치 조정
      messageListRef.current.scrollTop = currentScrollTop - heightDifference;
    } else {
      // 일반적인 콘텐츠 변경에 대한 스크롤 위치 조정
      const scrollTopDifference =
        currentScrollHeight - lastScrollHeight.current;
      messageListRef.current.scrollTop =
        lastScrollTop.current + scrollTopDifference;
    }

    lastScrollHeight.current = currentScrollHeight;
    lastScrollTop.current = messageListRef.current.scrollTop;
  }, [viewportHeight, heightDifference, messageList]);

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
    if (!messageEndRef.current) return;

    const isLastMessageMine =
      messageList.length > 0 &&
      messageList[messageList.length - 1].sender?.id === userId;

    if (isVisible || isLastMessageMine || isAtBottomRef.current) {
      scrollToBottom();
    } else {
      setShowUpButton(true);
    }
  }, [messageList]);

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
    scrollToBottom();
  }, [initialChatMessage]);

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    e.stopPropagation(); // 스크롤 이벤트가 상위로 전파되는 것을 방지
  };

  return (
    <>
      <MessageListContainer ref={messageListRef} onScroll={handleScroll}>
        {children}
        {messageList.map((message) =>
          message.type === 'SYSTEM' ? (
            message.chat.map((item) => (
              <SystemMessage key={item}>{item}</SystemMessage>
            ))
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
          onClick={scrollToBottom}
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
