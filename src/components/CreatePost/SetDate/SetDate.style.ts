import styled from 'styled-components';

export const Container = styled.div`
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const DateStringContainer = styled.div`
  padding: 10px;

  text-align: right;
  font-weight: var(--weight-semi-bold);
`;

export const DatePickerContainer = styled.div`
  margin-bottom: 300px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;

  border-radius: 6px;
  background-color: var(--color-main);

  color: var(--color-white);
  font-weight: var(--weight-bold);
`;
