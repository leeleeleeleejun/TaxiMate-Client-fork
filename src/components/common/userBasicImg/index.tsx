import UserIcon from '@/assets/icons/footer/user-icon.svg?react';
import styled from 'styled-components';

const UserBasicImg = () => {
  return (
    <Container>
      <UserIcon />
    </Container>
  );
};

export default UserBasicImg;

const Container = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  height: 40px;
  background: var(--color-main);
  border-radius: 50%;

  overflow: hidden;

  svg {
    margin-top: 15px;
    width: 40px;
    height: 40px;
    fill: var(--color-gray-300);
  }
`;
