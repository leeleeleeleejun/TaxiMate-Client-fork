import { Container } from './userContainer.style.ts';
import UserBasicImg from '@/components/common/userBasicImg';

const UserContainer = ({ img, name }: { img: string; name: string }) => {
  return (
    <Container>
      {img ? <img src={img} alt='profile' /> : <UserBasicImg />}
      <span>{name}</span>
    </Container>
  );
};

export default UserContainer;
