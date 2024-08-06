import {
  MessageBox,
  MessageContainer,
  MessageTime,
  OthersMessage,
  OthersName,
  OthersProfile,
} from '@/components/chatRoom/chatRoom.style.ts';
import UserBasicImg from '@/components/common/userBasicImg';
import formatMongoDate from '@/utils/formatMongoDate.ts';

const OthersMessageBox = ({
  name,
  messages,
  time,
  img,
}: {
  name: string;
  messages: string[];
  time: string;
  img: string;
}) => {
  return (
    <MessageBox>
      {img ? <OthersProfile src={img} alt='profile' /> : <UserBasicImg />}
      <MessageContainer>
        <OthersName>{name}</OthersName>
        {messages.map((message, index) => (
          <OthersMessage key={index}>{message}</OthersMessage>
        ))}
      </MessageContainer>
      <MessageTime>{formatMongoDate(time)}</MessageTime>
    </MessageBox>
  );
};

export default OthersMessageBox;
