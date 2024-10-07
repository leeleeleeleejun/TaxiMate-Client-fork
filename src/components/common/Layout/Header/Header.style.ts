import styled from 'styled-components';

export const Container = styled.header`
  height: var(--header-height);

  box-sizing: border-box;
  padding: 10px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderItem = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;

  font-size: var(--font-medium);
  font-weight: var(--weight-bold);

  & > svg {
    margin-left: 5px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  padding: 0 10px 0 0;
`;
