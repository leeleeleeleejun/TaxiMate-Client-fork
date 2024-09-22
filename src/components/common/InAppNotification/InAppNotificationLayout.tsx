import InAppNotification from '@/components/common/InAppNotification/index.tsx';
import { Outlet } from 'react-router-dom';
import useStompClient from '@/api/useStompClient.ts';
import { Data } from '@/utils/eventBus.ts';
import { useMessageSubscription } from '@/api/useMessageSubscription.ts';

const InAppNotificationLayout = () => {
  useStompClient();
  const handleNewMessage = (message: Data) => {
    console.log('New message in MainScreen:', message);
    // 화면 상단에 인앱 알림을 띄우는 로직
  };

  useMessageSubscription(handleNewMessage);

  return (
    <>
      <InAppNotification
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
