import Header from '@/components/common/Layout/Header';
import ChatIcon from '@/assets/icons/chat/chat-icon.svg?react';
import { HeaderItem } from '@/components/common/Layout/Header/Header.style.ts';
import { Container } from '@/components/chatList/chatList.style.ts';
import Footer from '@/components/common/Layout/Footer';
import ChatListItem from '@/components/chatList/ChatListItem.tsx';

const ChatListPage = () => {
  return (
    <>
      <Header>
        <HeaderItem>
          채팅
          <ChatIcon />
        </HeaderItem>
      </Header>
      <Container>
        <ChatListItem
          title={'학생회관 앞 CU 편의점 종합버스'}
          currentPassengers={1}
          maxPassengers={4}
          resentMessage={'언제 만나실래ㅐ요??'}
          resentMessageTime={'오후 2:32'}
          resentMessageCounter={'3'}
        />
        <ChatListItem
          title={'학생회관 앞'}
          currentPassengers={1}
          maxPassengers={4}
          resentMessage={
            '근데 제가 내일 모레 학교에서 머시기 저시기 url 복붙 This guiaaa'
          }
          resentMessageTime={'어제'}
          resentMessageCounter={'123'}
        />
        <ChatListItem
          title={'학생회관 앞 CU 편의점 종합버스'}
          currentPassengers={1}
          maxPassengers={4}
          resentMessage={
            '근데 제가 내일 모레 학교에서 머시기 저시기 url 복붙 This guide walks you through the process of azcasdsadasdasdasdas'
          }
          resentMessageTime={'5월 24일'}
          resentMessageCounter={'300+'}
        />
        <ChatListItem
          title={
            '근데 제가 내일 모레 학교에서 머시기 저시기 url 복붙 This guiaaa'
          }
          currentPassengers={1}
          maxPassengers={4}
          resentMessage={'언제 만나실래ㅐ요??'}
          resentMessageTime={'2023. 11. 02.'}
          resentMessageCounter={'3'}
        />
      </Container>
      <Footer />
    </>
  );
};
export default ChatListPage;
