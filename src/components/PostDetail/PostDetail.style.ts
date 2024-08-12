import styled from 'styled-components';
import MarkerContainerStyle from '@/components/common/MarkerContainer/MarkerContainer.style.ts';

export const PostDetailContainer = styled.div`
  height: 100%;
  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .map-wrapper {
    width: 100%;
    min-height: 250px;
    margin: 20px 0;

    overflow: hidden;
  }

  ${MarkerContainerStyle}
`;

export const PostDetailHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  color: var(--color-gray-100);
  font-size: var(--font-small);
`;

export const PostDetailTitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px 20px;

  h2 {
    font-size: 18px;
    font-weight: var(--weight-semi-bold);

    margin-bottom: 5px;
  }
`;

export const ContentContainer = styled.div`
  padding: 0 20px;

  font-size: var(--font-small);
  font-weight: var(--weight-light);
  color: var(--color-gray-100);

  white-space: pre-wrap;
`;

export const MoveInfoContainer = styled.div`
  padding: 15px 20px;

  font-size: var(--font-semi-micro);
  font-weight: var(--weight-light);
  color: var(--color-gray-100);

  border-bottom: 1px solid var(--color-gray-300);

  span {
    margin: 0 10px 0 5px;
    font-size: var(--font-small);
    color: black;
  }
`;

export const JoinButton = styled.button`
  margin: 20px auto;
  border-radius: 6px;
  width: 110px;
  min-height: 45px;
  background-color: var(--color-main);

  font-size: 18px;
  font-weight: var(--weight-bold);

  color: var(--color-white);
`;
