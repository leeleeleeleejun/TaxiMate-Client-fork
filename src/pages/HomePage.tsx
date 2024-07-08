import Header from '@/components/common/Layout/Header';
import { HeaderItem } from '@/components/common/Layout/Header/Header.style.ts';
import Footer from '@/components/common/Layout/Footer';
import Map from '@/components/Home/Map';
import PostList from '@/components/Home/PostList';

import TaxiIcon from '@/assets/icons/header/taxi-icon.svg?react';
import KnuLogoIcon from '@/assets/icons/header/knu-logo-icon.svg?react';

const HomePage = () => {
  return (
    <>
      <Header paddingX={20} paddingY={10}>
        <HeaderItem>
          택시팟
          <TaxiIcon />
        </HeaderItem>
        <KnuLogoIcon />
      </Header>
      <Map />
      <PostList />
      <Footer />
    </>
  );
};

export default HomePage;
