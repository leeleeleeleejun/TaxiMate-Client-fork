import { Outlet } from 'react-router-dom';
import { useMessageSubscription } from '@/hooks/useMessageSubscription.ts';
import InAppNotification from '@/components/common/InAppNotification/index.tsx';
import useInAppNotificationHandler from '@/hooks/useInAppNotificationHandler.ts';

const InAppNotificationLayout = () => {
  const { notification, showNotification, handleNewMessage } =
    useInAppNotificationHandler();

  useMessageSubscription(handleNewMessage);

  const partyTitle = notification?.partyTitle || '';
  const partyId = notification?.partyId || 0;
  const message = notification?.message || '';

  return (
    <>
      {notification && (
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
      )}
      <Outlet />
    </>
  );
};

export default InAppNotificationLayout;
