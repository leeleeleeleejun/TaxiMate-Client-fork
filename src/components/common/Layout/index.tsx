import { Outlet } from 'react-router-dom';
import Container from '@/components/common/Layout/Layout.style.ts';
import InAppNotification from '@/components/common/InAppNotification';

const Layout = () => {
  return (
    <Container>
      <InAppNotification
        partyTitle={'학생회관 앞 CU 편의점 종합버스'}
        partyId={'1'}
        message={
          '근데 제가 내일 모레 학교에서 머시기 저시기 url 복붙 This guide walks you through the process of azcasdsadasdasdasdas'
        }
        sender={{ profileImage: '', nickname: '지찬우', id: '1' }}
      />
      <Outlet />
    </Container>
  );
};

export default Layout;
