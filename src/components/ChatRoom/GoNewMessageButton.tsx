import { GoNewMessageButtonContainer } from '@/components/ChatRoom/chatRoom.style.ts';
import UserBasicImg from '@/components/common/userBasicImg';
import { Message } from '@/components/common/InAppNotification/InAppNotification.style.ts';
import ArrowDownIcon from '@/assets/icons/arrow-down-icon.svg?react';
import { UserProfileImg } from '@/components/common/UserContainer/userContainer.style.ts';

const GoNewMessageButton = ({
  img,
  name,
  message,
  onClick,
}: {
  img: string;
  name: string;
  message: string;
  onClick: () => void;
}) => {
  return (
    <GoNewMessageButtonContainer onClick={onClick}>
      <div>
        {img ? <UserProfileImg src={img} alt='profile' /> : <UserBasicImg />}
        <span>{name}</span>
      </div>
      <Message>{message}</Message>
      <ArrowDownIcon />
    </GoNewMessageButtonContainer>
  );
};

export default GoNewMessageButton;
