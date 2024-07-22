import {
  MessageContainer,
  MessageTime,
  MyMessage,
  MyMessageBoxContainer,
} from '@/components/chatRoom/chatRoom.style.ts';

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
      <MessageTime>{time}</MessageTime>
    </MyMessageBoxContainer>
  );
};

export default MyMessageBox;
