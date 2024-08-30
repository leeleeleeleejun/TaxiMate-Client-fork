import {
  MessageInput,
  MessageInputBoxContainer,
} from '@/components/chatRoom/chatRoom.style.ts';
import { useState } from 'react';

import ArrowUpIcon from '@/assets/icons/arrow-up-icon.svg?react';
import socket from '@/api/SocketTest.ts';

const MessageInputBox = () => {
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit('sendMessage', input, (res: string) => {
        console.log('sendMessage', res);
      });
      setInput('');
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
