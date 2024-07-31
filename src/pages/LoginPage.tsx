import TaxiIcon from '@/assets/icons/login/taxi-icon.svg?react';
import styled from 'styled-components';
import { LoginApi } from '@/api/useApi.ts';

const LoginPage = () => {
  const click = () => {
    LoginApi();
  };

  return (
    <>
      <IconWrap>
        <TaxiIcon />
        <div>공주대학교</div>
        <span>택시팟</span>
        <LoginButton onClick={click}>
          <img
            src={'src/assets/icons/login/kakao-login.png'}
            alt={'kakao-login-button'}
          />
        </LoginButton>
      </IconWrap>
    </>
  );
};

export default LoginPage;

const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: var(--font-large);

  span {
    font-weight: var(--weight-bold);
  }
`;

const LoginButton = styled.button`
  position: fixed;
  bottom: 60px;
`;
