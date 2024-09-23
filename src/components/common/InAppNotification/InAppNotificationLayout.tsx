import InAppNotification from '@/components/common/InAppNotification/index.tsx';
import { Outlet } from 'react-router-dom';
import { Data } from '@/utils/eventBus.ts';
import { useMessageSubscription } from '@/api/useMessageSubscription.ts';
import { useState } from 'react';

const InAppNotificationLayout = () => {
  // const [notification, setNotification] = useState<string>('');
  const [showNotification, setShowNotification] = useState(false);

  const handleNewMessage = (message: Data) => {
    console.log('New message in MainScreen:', message);
    if (!message) return;

    // setNotification(message.message);
    setShowNotification(true);

    // 5초 후에 알림을 숨깁니다
    setTimeout(() => setShowNotification(false), 3000);
  };

  useMessageSubscription(handleNewMessage);

  return (
    <>
      <InAppNotification
        showNotification={showNotification}
        partyTitle={'학생회관 앞 CU 편의점 종합버스'}
        partyId={'1'}
        message={
          '근데 제가 내일 모레 학교에서 머시기 저시기 url 복붙 This guide walks you through the process of azcasdsadasdasdasdas'
        }
        sender={{ profileImage: '', nickname: '지찬우', id: '1' }}
      />
      <Outlet />
    </>
  );
};

export default InAppNotificationLayout;
