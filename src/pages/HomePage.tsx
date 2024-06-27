import styled from 'styled-components';

import Header from '@/components/common/Layout/Header';
import Footer from '@/components/common/Layout/Footer';
import Map from '@/components/Home/Map';

import TaxiIcon from '@/assets/icons/header/taxi-icon.svg?react';
import KnuLogoIcon from '@/assets/icons/header/knu-logo-icon.svg?react';

const HomePage = () => {
  return (
    <>
      <Header>
        <HeaderItem>
          택시팟
          <TaxiIcon />
        </HeaderItem>
        <KnuLogoIcon />
      </Header>
      <Map />
      <Footer />
    </>
  );
};

export default HomePage;

const HeaderItem = styled.span`
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
  line-height: 50%;
  display: flex;
  align-items: center;
  text-align: center;
`;
