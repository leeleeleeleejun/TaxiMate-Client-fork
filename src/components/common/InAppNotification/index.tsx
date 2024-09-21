import { ChatMessage } from '@/types/chat.ts';
import UserBasicImg from '@/components/common/userBasicImg';
import {
  Container,
  Content,
  Message,
  ProfileImg,
  ProfileName,
  Title,
} from '@/components/common/InAppNotification/InAppNotification.style.ts';

const InAppNotification = ({ partyTitle, message, sender }: ChatMessage) => {
  return (
    <Container>
      {sender.profileImage ? (
        <ProfileImg src={sender.profileImage} />
      ) : (
        <UserBasicImg />
      )}
      <Content>
        <Title>{partyTitle}</Title>
        <ProfileName>{sender.nickname}</ProfileName>
        <Message>{message}</Message>
      </Content>
    </Container>
  );
};
export default InAppNotification;
