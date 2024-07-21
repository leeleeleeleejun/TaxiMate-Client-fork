import Header from '@/components/common/Layout/Header';
import ChatIcon from '@/assets/icons/chat/chat-icon.svg?react';
import { HeaderItem } from '@/components/common/Layout/Header/Header.style.ts';

const ChatListPage = () => {
  return (
    <>
      <Header>
        <HeaderItem>
          채팅
          <ChatIcon />
        </HeaderItem>
      </Header>
    </>
  );
};
export default ChatListPage;
