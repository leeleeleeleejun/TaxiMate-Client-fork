import styled from 'styled-components';

export const Main = styled.main`
  div {
    width: 100%;
    height: calc(100vh - (var(--header-height) + var(--footer-height)));
  }
`;
