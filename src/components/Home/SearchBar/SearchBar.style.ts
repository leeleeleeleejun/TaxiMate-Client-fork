import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 40px;
  left: 5%;
  right: 5%;

  height: 46px;
  padding: 14px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--color-white);
  border-radius: 8px;
`;

export const SearchBarInput = styled.input`
  width: 90%;
  height: 100%;

  font-size: var(--font-small);

  border: none;
  border-radius: 8px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--color-gray-200);
  }
`;
