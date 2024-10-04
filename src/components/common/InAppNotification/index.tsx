import { ChatMessage } from '@/types/chat.ts';
import { CLIENT_PATH } from '@/constants/path.ts';
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
  setShowNotification: () => void;
}

const InAppNotification = ({
  partyTitle,
  message,
  sender,
  partyId,
  showNotification,
  setShowNotification,
}: Props) => {
  return (
    <Container
      to={CLIENT_PATH.CHAT_ROOM.replace(':chatRoomId', String(partyId))}
      onClick={() => setShowNotification()}
      $show={showNotification}
    >
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
