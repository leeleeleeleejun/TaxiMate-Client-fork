import { Outlet, useNavigate } from 'react-router-dom';
import Container from '@/components/common/Layout/Layout.style.ts';
import { useEffect } from 'react';
import { CLIENT_PATH } from '@/constants/path.ts';
import reactNativePostMessage from '@/utils/reactNativePostMessage.ts';
import { useSetPushAlarmMutation } from '@/api/localApi.ts';

const Layout = () => {
  const navigate = useNavigate();

  const [
    setPushAlarmTrigger,
    // {
    //   isLoading: isPushAlarmLoading,
    //   isError: isPushAlarmError,
    //   isSuccess: isPushAlarmSuccess,
    // },
  ] = useSetPushAlarmMutation();

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      const { data, type } = JSON.parse(e.data);
      alert(data);
      alert(type);

      if (type !== 'CHAT' || type !== 'PUSH_NOTIFICATION') return;

      try {
        // console.log('Received message', e);
        if (type === 'CHAT') {
          if (data.partyId) {
            navigate(
              CLIENT_PATH.CHAT_ROOM.replace(':chatRoomId', data.partyId)
            );
          }
        } else if (type === 'PUSH_NOTIFICATION') {
          if (data.token) {
            setPushAlarmTrigger(data.token);
          }
        }
      } catch (error) {
        console.error('메시지 처리 중 오류 발생:', error);
      }
    };

    window.addEventListener('message', handleMessage);
    reactNativePostMessage('chat');

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layout;
