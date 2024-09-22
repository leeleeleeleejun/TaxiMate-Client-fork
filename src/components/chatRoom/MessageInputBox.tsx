import { Client } from '@stomp/stompjs';
import { accessToken } from '@/api/localApi.ts';

import {
  MessageInput,
  MessageInputBoxContainer,
} from '@/components/chatRoom/chatRoom.style.ts';
import { useState } from 'react';

import ArrowUpIcon from '@/assets/icons/arrow-up-icon.svg?react';

const MessageInputBox = ({
  client,
  partyId,
}: {
  client: Client | null;
  partyId: string;
}) => {
  const [input, setInput] = useState('');
  const sendMessage = () => {
    if (input.trim() && client) {
      client.publish({
        destination: '/app/messages',
        headers: { Authorization: `Bearer ${accessToken}` },
        body: JSON.stringify({
          partyId,
          message: input,
        }),
      });

      setInput('');
    } else {
      console.log('유효하지 않은 파티입니다.');
    }
  };

  return (
    <MessageInputBoxContainer>
      <MessageInput
        placeholder={'메세지를 입력해주세요!'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        $inputLineLength={input.split('\n').length}
      />
      <button onClick={sendMessage}>
        <ArrowUpIcon />
      </button>
    </MessageInputBoxContainer>
  );
};

export default MessageInputBox;
