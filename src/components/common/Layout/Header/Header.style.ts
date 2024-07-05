import styled from 'styled-components';

export const Container = styled.header<{
  $paddingX: number;
  $paddingY: number;
}>`
  height: var(--header-height);

  box-sizing: border-box;
  padding: ${({ $paddingX, $paddingY }) => `${$paddingY}px ${$paddingX}px`};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
