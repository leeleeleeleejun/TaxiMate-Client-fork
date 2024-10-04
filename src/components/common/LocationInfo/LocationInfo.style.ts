import styled from 'styled-components';

export const LocationInfoContainer = styled.div<{ $inCreate?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.$inCreate ? '10px 0' : '10px 20px')};
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
  max-width: 100%;
  height: 14px;
  margin-left: 50px;

  font-size: var(--font-small);
  font-weight: var(--weight-light);
  color: var(--color-gray-200);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
