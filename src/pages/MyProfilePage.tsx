import { useGetProfileQuery } from '@/api/userApi.ts';

import Header from '@/components/common/Layout/Header';
import Footer from '@/components/common/Layout/Footer';
import UserContainer from '@/components/common/UserContainer';
import { Container, Menu } from '@/components/MyProfile/myProfile.style.ts';
import { HeaderItem } from '@/components/common/Layout/Header/Header.style.ts';
import LoadingIcon from '@/components/common/LoadingIcon';

import MyProfileIcon from '@/assets/icons/header/my-porfile-icon.svg?react';
import MenuItem from '@/components/MyProfile/MenuItem.tsx';
import FileIcon from '@/assets/icons/file-icon.svg?react';
// import NoticeIcon from '@/assets/icons/notice-icon.svg?react';
// import Toggle from '@/components/common/Toggle.tsx';

const MyProfilePage = () => {
  const { data, isLoading } = useGetProfileQuery(null);
  if (isLoading) return <LoadingIcon />;
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
        <Menu>
          {/*<MenuItem content={'알림설정'} SvgIcon={NoticeIcon}>*/}
          {/*  <Toggle />*/}
          {/*</MenuItem>*/}
          <MenuItem content={'이용약관'} SvgIcon={FileIcon} />
        </Menu>
      </Container>
      <Footer />
    </>
  );
};

export default MyProfilePage;
