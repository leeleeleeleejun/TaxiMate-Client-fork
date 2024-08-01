import Header from '@/components/common/Layout/Header';
import { HeaderItem } from '@/components/common/Layout/Header/Header.style.ts';
import Footer from '@/components/common/Layout/Footer';
import Map from '@/components/Home/Map';
import PostList from '@/components/Home/PostList';

import TaxiIcon from '@/assets/icons/header/taxi-icon.svg?react';
import KnuLogoIcon from '@/assets/icons/header/knu-logo-icon.svg?react';
import { Main } from '@/components/Home/Map/Map.style.ts';
import SearchBar from '@/components/Home/SearchBar';
import ResearchButton from '@/components/Home/ResearchButton';
import MoveCurrentLocation from '@/components/Home/MoveCurrentLocation';

import { useState } from 'react';

const HomePage = () => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [activeButton, setActiveButton] = useState<boolean>(true);

  return (
    <>
      <Header>
        <HeaderItem>
          택시팟
          <TaxiIcon />
        </HeaderItem>
        <KnuLogoIcon />
      </Header>
      <Main>
        <SearchBar path={'/search'} />
        <ResearchButton />
        <MoveCurrentLocation map={map} activeButton={activeButton} />
        <Map map={map} setMap={setMap} setActiveButton={setActiveButton} />
        <PostList />
      </Main>
      <Footer />
    </>
  );
};

export default HomePage;
