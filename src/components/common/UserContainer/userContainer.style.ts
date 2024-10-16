import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 15px 20px;
  & > span {
    padding-right: 10px;

    font-size: var(--font-small);
    font-weight: var(--weight-bold);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & > svg {
    margin-right: 4px;
  }
`;

export const UserProfileImg = styled.img`
  border-radius: 50%;
  object-fit: cover;

  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;

  margin-right: 10px;
`;
