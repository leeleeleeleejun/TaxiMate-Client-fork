import {
  MessageInput,
  MessageInputBoxContainer,
} from '@/components/chatRoom/chatRoom.style.ts';
import { useState } from 'react';

import ArrowUpIcon from '@/assets/icons/arrow-up-icon.svg?react';
import { sendMessageWS } from '@/api/SocketTest.ts';

const MessageInputBox = ({ partyId }: { partyId: string }) => {
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim() && partyId) {
      sendMessageWS(partyId, input);
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
