import Header from '@/components/common/Layout/Header';
import { HeaderItem } from '@/components/common/Layout/Header/Header.style.ts';
import { Container, Divider } from '@/components/chatList/chatList.style.ts';
import Footer from '@/components/common/Layout/Footer';

import ChatIcon from '@/assets/icons/chat/chat-icon.svg?react';
import { useGetChatListQuery } from '@/api/localApi.ts';
import ChatListWrap from '@/components/chatList/ChatListWrap.tsx';

const ChatListPage = () => {
  const { data, isLoading } = useGetChatListQuery(null);
  // const [chatRoomList, setChatRoomList] = useState<ChatRoom[]>([]);
  //
  // useEffect(() => {
  //   if (data) {
  //     setChatRoomList(data);
  //   }
  // }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>no data...</div>;

  const progressChatRoom = data.filter((chat) => chat.isProgress);
  const closeChatRoom = data.filter((chat) => !chat.isProgress);

  return (
    <>
      <Header>
        <HeaderItem>
          채팅
          <ChatIcon />
        </HeaderItem>
      </Header>
      <Container>
        <ChatListWrap chatRoomListProp={progressChatRoom} />
        <Divider>종료된 팟</Divider>
        <ChatListWrap chatRoomListProp={closeChatRoom} />
      </Container>
      <Footer />
    </>
  );
};
export default ChatListPage;

// 서버에 저장되거나 불러올 때 최신순으로 주기
