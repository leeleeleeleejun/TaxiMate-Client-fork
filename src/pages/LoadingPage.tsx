import styled from 'styled-components';
import TaxiIcon from '@/assets/icons/login/taxi-icon.svg?react';

const LoadingPage = () => {
  return (
    <Container>
      <TaxiIcon />
    </Container>
  );
};

export default LoadingPage;

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;
