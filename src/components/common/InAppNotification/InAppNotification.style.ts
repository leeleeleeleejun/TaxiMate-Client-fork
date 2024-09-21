import styled from 'styled-components';
import { MessageContent } from '@/components/chatList/chatList.style.ts';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 14px;
  position: absolute;
  top: 0;
  z-index: 3;
  background-color: var(--color-white);
  box-shadow: 0 0 2px 2px var(--color-gray-200);

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const ProfileName = styled.div`
  font-size: var(--font-small);
  color: var(--color-gray-100);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-left: 4px;
`;

export const Title = styled.div`
  font-weight: var(--weight-semi-bold);
`;

export const Message = styled(MessageContent)`
  font-size: var(--font-small);
  font-weight: var(--weight-light);
  -webkit-line-clamp: 1;
`;
