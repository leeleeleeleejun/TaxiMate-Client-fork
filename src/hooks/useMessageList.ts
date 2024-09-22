import { useState } from 'react';
interface testChat {
  _id: string;
  chat: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
  };
}

interface groupMessage {
  _id: string;
  chat: string[];
  createdAt: string;
  updatedAt: string;
  user: {
    id: string;
    name: string;
  };
}
const useMessageList = () => {
  const [messageList, setMessageList] = useState<groupMessage[]>([]);

  const handleMessage = (message: testChat) => {
    const setMessage = { ...message, chat: [message.chat] };

    setMessageList((prevState) => {
      if (prevState.length > 0) {
        const lastMessage = prevState[prevState.length - 1];
        const isSameUser = lastMessage.user.id === message.user.id;
        const isSameTime =
          lastMessage?.createdAt.slice(0, 16) ===
          message.createdAt.slice(0, 16);

        if (isSameUser && isSameTime) {
          const updatedMessage = {
            ...lastMessage,
            chat: [...lastMessage.chat, ...setMessage.chat],
          };
          return [...prevState.slice(0, prevState.length - 1), updatedMessage];
        }
      }
      return [...prevState, setMessage];
    });
  };

  return { messageList, handleMessage };
};

export default useMessageList;
