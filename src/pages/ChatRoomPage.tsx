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
import { useState } from 'react';

const ChatRoomPage = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState('');

  return (
    <>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </BackButton>
        <RoomTitle>
          학생회관 앞 CU앞 종합버스 터미널생회관 앞 CU앞 종합버스 터미널
        </RoomTitle>
        <DropDown />
      </Header>
      <NotificationContainer to={''}>
        <NotificationHeader>
          <PeopleCountTag currentPassengers={4} maxPassengers={4} />
          <ArrowRightIcon />
        </NotificationHeader>
        <PostBody
          departureTime={'오늘 오후 1:10쯤'}
          origin={'공주대학교 정문'}
          destination={'천안종합버스터미널'}
        />
      </NotificationContainer>
      <Container>
        <MyMessageBox
          messages={['안녕하세요', '하이루요~!~!~!~!~!~']}
          time={'오후 2:30'}
        />
        <OthersMessageBox
          messages={['안녕하세요', '하이루요~!~!~!~!~!~']}
          time={'오후 2:30'}
        />
      </Container>
      <MessageInputBox>
        <MessageInput
          placeholder={'메세지를 입력해주세요!'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          $inputLineLength={input.split('\n').length}
        />
        <button>
          <ArrowUpIcon />
        </button>
      </MessageInputBox>
    </>
  );
};
export default ChatRoomPage;
