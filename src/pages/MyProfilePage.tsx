import Header from '@/components/common/Layout/Header';
import Footer from '@/components/common/Layout/Footer';
import UserContainer from '@/components/common/UserContainer';
import { Container } from '@/components/myProfile/myProfile.style.ts';
import { HeaderItem } from '@/components/common/Layout/Header/Header.style.ts';

import MyProfileIcon from '@/assets/icons/header/my-porfile-icon.svg?react';
import { useGetProfileQuery } from '@/api/localApi.ts';

const MyProfilePage = () => {
  const { data, isLoading } = useGetProfileQuery(null);
  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>no data...</div>;

  return (
    <>
      <Header>
        <HeaderItem>
          내 정보
          <MyProfileIcon />
        </HeaderItem>
      </Header>
      <Container>
        <UserContainer img={data.profileImage} name={data.nickname} />
      </Container>
      <Footer />
    </>
  );
};

export default MyProfilePage;
