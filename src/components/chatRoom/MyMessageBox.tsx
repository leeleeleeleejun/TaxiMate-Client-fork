import {
  MessageContainer,
  MessageTime,
  MyMessage,
  MyMessageBoxContainer,
} from '@/components/chatRoom/chatRoom.style.ts';
import formatMongoDate from '@/utils/formatMongoDate.ts';

const MyMessageBox = ({
  messages,
  time,
}: {
  messages: string[];
  time: string;
}) => {
  return (
    <MyMessageBoxContainer>
      <MessageContainer>
        {messages.map((message, index) => (
          <MyMessage key={index}>{message}</MyMessage>
        ))}
      </MessageContainer>
      <MessageTime>{formatMongoDate(time)}</MessageTime>
    </MyMessageBoxContainer>
  );
};

export default MyMessageBox;
