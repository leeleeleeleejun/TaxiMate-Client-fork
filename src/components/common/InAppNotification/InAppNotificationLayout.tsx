import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ChatMessage } from '@/types/chat.ts';
import { useMessageSubscription } from '@/api/useMessageSubscription.ts';
import InAppNotification from '@/components/common/InAppNotification/index.tsx';

const InAppNotificationLayout = () => {
  const [notification, setNotification] = useState<ChatMessage | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const handleNewMessage = (message: ChatMessage) => {
    console.log('New message in MainScreen:', message);
    if (!message) return;

    setNotification(message);
    setShowNotification(true);

    // 5초 후에 알림을 숨깁니다
    setTimeout(() => setShowNotification(false), 3000);
  };

  useMessageSubscription(handleNewMessage);

  if (!notification) return;

  const { partyTitle, partyId, message } = notification;

  return (
    <>
      <InAppNotification
        showNotification={showNotification}
        partyTitle={partyTitle}
        partyId={partyId}
        message={message}
        sender={{
          profileImage: '',
          nickname: '이준석',
          id: '1',
        }}
        createdAt={''}
      />
      <Outlet />
    </>
  );
};

export default InAppNotificationLayout;
