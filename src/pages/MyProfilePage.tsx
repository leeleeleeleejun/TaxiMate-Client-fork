import Header from '@/components/common/Layout/Header';
import Footer from '@/components/common/Layout/Footer';
import UserContainer from '@/components/common/UserContainer';
import { Container } from '@/components/myProfile/myProfile.style.ts';
import { HeaderItem } from '@/components/common/Layout/Header/Header.style.ts';

import MyProfileIcon from '@/assets/icons/header/my-porfile-icon.svg?react';

const MyProfilePage = () => {
  return (
    <>
      <Header>
        <HeaderItem>
          내 정보
          <MyProfileIcon />
        </HeaderItem>
      </Header>
      <Container>
        <UserContainer img={'profile.png'} name={'나는야 오빠 짜누야!!'} />
      </Container>
      <Footer />
    </>
  );
};

export default MyProfilePage;
