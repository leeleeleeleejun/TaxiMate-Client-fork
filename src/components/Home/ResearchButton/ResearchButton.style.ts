import styled from 'styled-components';

export const Container = styled.button`
  width: 150px;
  height: 35px;

  padding: 8px 14px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 81px;
  z-index: 2;
  left: 30%;
  right: 30%;

  border-radius: 50px;

  font-size: var(--font-small);
  background: var(--color-white);
`;
