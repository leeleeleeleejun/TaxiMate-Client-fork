import { Container } from './userContainer.style.ts';
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg?react';

const UserContainer = ({ img, name }: { img: string; name: string }) => {
  return (
    <Container>
      <img src={img} alt='profile' />
      <span>{name}</span>
      <ArrowRightIcon />
    </Container>
  );
};

export default UserContainer;
