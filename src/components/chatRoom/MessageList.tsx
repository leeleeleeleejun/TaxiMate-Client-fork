import MyMessageBox from '@/components/chatRoom/MyMessageBox.tsx';
import OthersMessageBox from '@/components/chatRoom/OthersMessageBox.tsx';
import {
  Container,
  SystemMessage,
} from '@/components/chatRoom/chatRoom.style.ts';
import { useLayoutEffect, useRef } from 'react';

// interface testChat {
//   _id: string;
//   chat: string;
//   createdAt: string;
//   updatedAt: string;
//   user: {
//     id: string;
//     name: string;
//   };
// }

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

// Todo: userName은 id로 변경 필요
const MessageList = () => {
 // const [messageList, setMessageList] = useState<groupMessage[]>([]);
  const messageEndRef = useRef<HTMLDivElement>(null);


  // useEffect(() => {
  //   socket.on('message', (message: testChat) => {
  //     handleMessage(message);
  //   });
  // }, []);
const messageList:groupMessage[] = [];

  useLayoutEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageList]);

  return (
    <Container>
      <SystemMessage>이준석님이 들어왔습니다.</SystemMessage>
      <SystemMessage>2024년 9월 21일 토요일</SystemMessage>
      {messageList.map((message) =>
        // Todo: 본인 확인 로직 추가 필요 userId로
        message.user.name ? (
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
  );
};

export default MessageList;
