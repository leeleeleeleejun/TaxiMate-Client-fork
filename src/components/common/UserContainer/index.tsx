import { Container } from './userContainer.style.ts';
import UserBasicImg from '@/components/common/userBasicImg';
import CrownIcon from '@/assets/icons/crown-iocn.svg?react';

const UserContainer = ({
  img,
  name,
  isHost,
}: {
  img: string;
  name: string;
  isHost?: boolean;
}) => {
  return (
    <Container>
      {img ? <img src={img} alt='profile' /> : <UserBasicImg />}
      {isHost && <CrownIcon />}
      <span>{name}</span>
    </Container>
  );
};

export default UserContainer;
