import { Outlet, useNavigate } from 'react-router-dom';
import Container from '@/components/common/Layout/Layout.style.ts';
import { useEffect } from 'react';
import { CLIENT_PATH } from '@/constants/path.ts';
import reactNativePostMessage from '@/utils/reactNativePostMessage.ts';

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      // if (
      //   e.origin === 'https://vercel.live' ||
      //   e.data.source === 'react-devtools-content-script'
      // ) {
      //   return;
      // }

      // console.log('Received message', e);

      const { partyId } = JSON.parse(e.data);
      if (partyId) {
        navigate(CLIENT_PATH.CHAT_ROOM.replace(':chatRoomId', partyId));
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
