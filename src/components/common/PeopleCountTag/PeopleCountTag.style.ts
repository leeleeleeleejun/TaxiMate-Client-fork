import styled, { css } from 'styled-components';

export const PeopleCountTagContainer = styled.div<{ $isMax: boolean }>`
  display: flex;
  align-items: center;

  padding: 5px 8px;

  font-size: var(--font-semi-micro);
  font-weight: 600;

  right: 5%;
  z-index: 2;

  border-radius: 5px;

  ${({ $isMax }) =>
    $isMax
      ? css`
          color: var(--color-unavailable-text);
          background-color: var(--color-unavailable-background);
        `
      : css`
          color: var(--color-available-text);
          background-color: var(--color-available-background);
        `}

  & > svg {
    fill: ${({ $isMax }) =>
      $isMax ? 'var(--color-unavailable-text)' : 'var(--color-available-text)'};

    margin-right: 6px;
  }
`;
