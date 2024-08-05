import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 15px 20px;

  img {
    border-radius: 50%;
    object-fit: cover;

    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  span {
    padding-right: 10px;

    font-size: var(--font-small);
    font-weight: var(--weight-bold);
  }
`;
