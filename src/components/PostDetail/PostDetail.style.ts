import styled from 'styled-components';

export const PostDetailContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  .map-wrapper {
    width: 100%;
    height: 250px;
    margin: 20px 0;

    border-radius: 10px;
    overflow: hidden;
  }
`;

export const PostDetailHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  color: var(--color-gray-100);
  font-size: var(--font-small);
`;

export const PostDetailTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;

  h2 {
    font-size: 18px;
    font-weight: var(--weight-semi-bold);

    margin-bottom: 5px;
  }
`;

export const LocationInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const LocationInfoHeader = styled.h3`
  font-weight: var(--weight-semi-bold);
  padding-bottom: 5px;

  span {
    color: var(--color-gray-200);
    margin-right: 8px;
  }
`;

export const LocationInfoBody = styled.div`
  margin-left: 50px;

  font-size: var(--font-small);
  font-weight: var(--weight-light);
  color: var(--color-gray-200);
`;

export const ContentContainer = styled.div`
  padding: 0 10px;

  font-size: var(--font-small);
  font-weight: var(--weight-light);
  color: var(--color-gray-100);
  white-space: pre;
`;

export const MoveInfoContainer = styled.div`
  padding: 15px 10px;

  font-size: var(--font-semi-micro);
  font-weight: var(--weight-light);
  color: var(--color-gray-100);

  span {
    margin: 0 10px 0 5px;
    font-size: var(--font-small);
    color: black;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;

  border-top: 1px solid var(--color-gray-300);
  padding: 10px;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  span {
    padding: 0 10px;

    font-size: var(--font-small);
    font-weight: var(--weight-bold);
  }
`;

export const JoinButton = styled.button`
  margin: 20px auto;
  border-radius: 6px;
  width: 110px;
  height: 45px;
  background-color: var(--color-main);

  font-size: 18px;
  font-weight: var(--weight-bold);

  color: var(--color-white);
`;
