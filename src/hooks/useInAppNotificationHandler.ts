import { useState } from 'react';
import { ChatMessage } from '@/types/chat.ts';

const useInAppNotificationHandler = () => {
  const [notification, setNotification] = useState<ChatMessage | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleNewMessage = (message: ChatMessage) => {
    if (!message) return;

    setNotification(message);
    setShowNotification(true);

    setTimeout(() => setShowNotification(false), 3000);
  };

  return {
    notification,
    showNotification,
    setShowNotification,
    handleNewMessage,
  };
};

export default useInAppNotificationHandler;
