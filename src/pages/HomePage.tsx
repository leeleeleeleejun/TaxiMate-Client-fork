import { useState } from 'react';
import { useGetPostsQuery } from '@/api/localApi.ts';

import Header from '@/components/common/Layout/Header';
import { HeaderItem } from '@/components/common/Layout/Header/Header.style.ts';
import Footer from '@/components/common/Layout/Footer';
import Map from '@/components/Home/Map';
import PostList from '@/components/Home/PostList';
import { Main } from '@/components/Home/Map/Map.style.ts';
import SearchBar from '@/components/Home/SearchBar';
import ResearchButton from '@/components/Home/ResearchButton';
import MoveCurrentLocation from '@/components/Home/MoveCurrentLocation';

import TaxiIcon from '@/assets/icons/header/taxi-icon.svg?react';
import KnuLogoIcon from '@/assets/icons/header/knu-logo-icon.svg?react';

const HomePage = () => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [activeButton, setActiveButton] = useState<boolean>(true);
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  const { data, isLoading } = useGetPostsQuery('posts');

  if (isLoading) return <div>isLoading...</div>;
  if (!data) return <div>isLoading...</div>;

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
        <MoveCurrentLocation
          map={map}
          activeButton={activeButton}
          activeMarker={activeMarker}
        />
        <Map
          map={map}
          setMap={setMap}
          setActiveButton={setActiveButton}
          activeMarker={activeMarker}
          setActiveMarker={setActiveMarker}
          data={data.data}
        />
      </Main>
      <PostList activeMarker={activeMarker} data={data.data} />
      <Footer />
    </>
  );
};

export default HomePage;
