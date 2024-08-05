import {
  MessageBox,
  MessageContainer,
  MessageTime,
  OthersMessage,
  OthersName,
  OthersProfile,
} from '@/components/chatRoom/chatRoom.style.ts';
import UserBasicImg from '@/components/common/userBasicImg';

const OthersMessageBox = ({
  messages,
  time,
  img,
}: {
  messages: string[];
  time: string;
  img: string;
}) => {
  return (
    <MessageBox>
      {img ? <OthersProfile src={img} alt='profile' /> : <UserBasicImg />}

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
