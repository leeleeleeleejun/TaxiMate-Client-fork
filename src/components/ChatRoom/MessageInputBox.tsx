import { useRef, useState } from 'react';

import {
  MessageInput,
  MessageInputBoxContainer,
} from '@/components/ChatRoom/chatRoom.style.ts';

import ArrowUpIcon from '@/assets/icons/arrow-up-icon.svg?react';

const MessageInputBox = ({
  sendMessage,
  partyId,
}: {
  sendMessage: (partyId: string, message: string) => void;
  partyId: string;
}) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const hiddenInput = useRef<HTMLInputElement>(null);
  const sendMessageFunc = () => {
    if (input.trim()) {
      sendMessage(partyId, input);

      setInput('');
      hiddenInput.current?.focus();
      inputRef.current?.focus();
    } else {
      console.log('유효하지 않은 메시지이거나 파티입니다.');
    }
  };

  return (
    <MessageInputBoxContainer>
      <MessageInput
        placeholder={'메세지를 입력해주세요!'}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        $inputLineLength={input.split('\n').length}
        ref={inputRef}
      />
      <input
        ref={hiddenInput}
        style={{ position: 'absolute', opacity: 0, height: 0 }}
      />
      <button onClick={sendMessageFunc}>
        <ArrowUpIcon />
      </button>
    </MessageInputBoxContainer>
  );
};

export default MessageInputBox;
