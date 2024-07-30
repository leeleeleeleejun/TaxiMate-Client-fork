import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RoomTitle = styled.h2`
  font-size: 18px;
  font-weight: var(--weight-medium);

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Container = styled.div`
  height: 100%;
  overflow: auto;

  padding: 0 20px;
`;

export const NotificationContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  border-bottom: 0.5px solid var(--color-gray-200);
  margin-bottom: 10px;
`;

export const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
`;

export const MessageBox = styled.div`
  display: flex;
  max-width: 50%;
`;

export const MyMessageBoxContainer = styled(MessageBox)`
  margin-left: auto;
  flex-direction: row-reverse;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  width: fit-content;
  padding: 8px 12px;
  margin-bottom: 2px;

  font-size: var(--font-small);
  border-radius: 14px;
  white-space: pre-wrap;
`;

export const OthersMessage = styled(Message)`
  background-color: var(--color-gray-300);
`;

export const MyMessage = styled(Message)`
  margin-left: auto;
  background-color: var(--color-main);
  color: var(--color-white);
`;

export const MessageTime = styled.span`
  margin-top: auto;
  padding: 0 2px 3px;
  color: var(--color-gray-100);
  font-size: var(--font-micro);
  font-weight: var(--weight-light);
  white-space: nowrap;
`;

export const OthersProfile = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;

  margin-right: 10px;
`;

export const OthersName = styled.span`
  margin-bottom: 5px;

  color: var(--color-gray-100);
  font-size: var(--font-semi-micro);
`;
export const MessageInputBox = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
`;

export const MessageInput = styled.textarea<{ $inputLineLength: number }>`
  width: 90%;
  height: ${(props) => props.$inputLineLength * 20 + 20 + 'px'};

  max-height: 125px;

  padding: 10px 14px;
  resize: none;
  line-height: 1.5;

  margin-right: 10px;
  border-radius: 18px;
  background-color: var(--color-gray-300);

  font-size: var(--font-small);

  outline: none;
`;