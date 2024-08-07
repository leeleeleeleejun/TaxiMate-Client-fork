import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '@/components/common/Layout/Header';
import DropDown from '@/components/common/DropDown.tsx';
import { PostBody } from '@/components/common/PostListItem';
import PeopleCountTag from '@/components/common/PeopleCountTag';
import MyMessageBox from '@/components/chatRoom/MyMessageBox.tsx';
import OthersMessageBox from '@/components/chatRoom/OthersMessageBox.tsx';
import { BackButton } from '@/components/common/Layout/Header/Header.style.ts';
import {
  Container,
  MessageInput,
  MessageInputBox,
  NotificationContainer,
  NotificationHeader,
  RoomTitle,
} from '@/components/chatRoom/chatRoom.style.ts';

import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg?react';
import ArrowUpIcon from '@/assets/icons/arrow-up-icon.svg?react';
import socket from '@/api/SocketTest.ts';

interface testUser {
  name: string;
  token: string;
  online: boolean;
}

interface testChat {
  _id: string;
  chat: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
  };
}

interface groupMessage {
  _id: string;
  chat: string[];
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
  };
}

const ChatRoomPage = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<testUser | null>();
  const [input, setInput] = useState('');
  const [messageList, setMessageList] = useState<groupMessage[]>([]);
  const messageEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit('sendMessage', input, (res: string) => {
        console.log('sendMessage', res);
      });
      setInput('');
    }
  };

  useEffect(() => {
    const name = prompt('닉네임을 입력해주세요');
    socket.emit('login', name, (response: { ok: boolean; user: testUser }) => {
      if (response.ok) {
        setUser(response.user);
      }
    });
    socket.on('message', (message: testChat) => {
      handleMessage(message);
    });
  }, []);

  useLayoutEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageList]);

  const handleMessage = (message: testChat) => {
    const setMessage = { ...message, chat: [message.chat] };

    setMessageList((prevState) => {
      if (prevState.length > 0) {
        const lastMessage = prevState[prevState.length - 1];
        const isSameUser = lastMessage.user.id === message.user.id;
        const isSameTime =
          lastMessage?.createdAt.slice(0, 16) ===
          message.createdAt.slice(0, 16);

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

  return (
    <>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </BackButton>
        <RoomTitle>
          학생회관 앞 CU앞 종합버스 터미널생회관 앞 CU앞 종합버스 터미널
        </RoomTitle>
        <DropDown items={['알림끄기']} danger={'나가기'} />
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
      <Container>
        {user &&
          messageList.map((message) =>
            message.user.name === user.name ? (
              <MyMessageBox
                key={message.createdAt}
                messages={message.chat}
                time={message.createdAt}
              />
            ) : (
              <OthersMessageBox
                key={message.createdAt}
                name={message.user.name}
                img={''}
                messages={message.chat}
                time={message.createdAt}
              />
            )
          )}
        <div ref={messageEndRef} />
      </Container>
      <MessageInputBox>
        <MessageInput
          placeholder={'메세지를 입력해주세요!'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          $inputLineLength={input.split('\n').length}
        />
        <button onClick={sendMessage}>
          <ArrowUpIcon />
        </button>
      </MessageInputBox>
    </>
  );
};

export default ChatRoomPage;
