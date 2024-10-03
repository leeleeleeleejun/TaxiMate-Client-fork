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

interface Props extends ChatMessage {
  showNotification: boolean;
}

const InAppNotification = ({
  showNotification,
  partyTitle,
  message,
  sender,
}: Props) => {
  return (
    <Container $show={showNotification}>
      {sender.profileImage ? (
        <ProfileImg src={sender.profileImage} />
      ) : (
        <UserBasicImg />
      )}
      <Content>
        <Title>{partyTitle}</Title>
        <ProfileName>{sender.nickname || 'user'}</ProfileName>
        <Message>{message}</Message>
      </Content>
    </Container>
  );
};
export default InAppNotification;
