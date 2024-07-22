import {
  MessageBox,
  MessageContainer,
  MessageTime,
  OthersMessage,
  OthersName,
  OthersProfile,
} from '@/components/chatRoom/chatRoom.style.ts';

const OthersMessageBox = ({
  messages,
  time,
}: {
  messages: string[];
  time: string;
}) => {
  return (
    <MessageBox>
      <OthersProfile src={'/profile.png'} alt='profile' />
      <MessageContainer>
        <OthersName>유능한 개발자</OthersName>
        {messages.map((message, index) => (
          <OthersMessage key={index}>{message}</OthersMessage>
        ))}
      </MessageContainer>
      <MessageTime>{time}</MessageTime>
    </MessageBox>
  );
};

export default OthersMessageBox;
