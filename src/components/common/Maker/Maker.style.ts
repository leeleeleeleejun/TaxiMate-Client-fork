import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContentBox = styled.div`
  max-width: 200px;
  height: 40px;
  padding: 0 10px;

  background-color: var(--color-main);
  border-radius: 8px;

  color: var(--color-white);
  font-size: var(--font-small);
  font-weight: var(--weight-semi-bold);
  text-align: center;
  line-height: 40px;

  span {
    font-weight: var(--weight-light);
  }
`;
export const BottomTriangle = styled.div`
  width: 0;
  height: 0;

  border-top: 11px solid var(--color-main);
  border-right: 9px solid transparent;
  border-left: 9px solid transparent;
`;
