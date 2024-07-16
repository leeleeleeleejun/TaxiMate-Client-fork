import styled from 'styled-components';

export const LocationInfoContainer = styled.div<{ $inCreate?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.$inCreate ? '10px 0' : '10px')};
`;

export const LocationInfoHeader = styled.h3`
  display: flex;
  justify-content: space-between;

  font-weight: var(--weight-semi-bold);
  padding-bottom: 5px;

  span {
    color: var(--color-gray-200);
    margin-right: 8px;
  }
`;

export const LocationInfoBody = styled.div`
  height: 14px;
  margin-left: 50px;

  font-size: var(--font-small);
  font-weight: var(--weight-light);
  color: var(--color-gray-200);
`;
