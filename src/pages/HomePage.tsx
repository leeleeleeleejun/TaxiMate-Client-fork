import {
  Container as MapDiv,
  NaverMap,
  Marker
} from "react-naver-maps";
import styled from "styled-components";

import Header from "@/components/common/Layout/Header"
import Footer from "@/components/common/Layout/Footer";
import {Main} from "@/components/Home/Home.style.ts";

import TaxiIcon from "@/assets/header/taxi-icon.svg?react"
import KnuLogoIcon from "@/assets/header/knu-logo-icon.svg?react"



const HomePage = () => {

  return <>
    <Header>
      <HeaderItem>
        택시팟
        <TaxiIcon/>
      </HeaderItem>
      <KnuLogoIcon/>
    </Header>
    <Main>
      <MapDiv>
        <NaverMap>
          <Marker defaultPosition={{ lat: 37.5666103, lng: 126.9783882 }} />
        </NaverMap>
      </MapDiv>
    </Main>
    <Footer/>
    </>;
}

export default HomePage;

const HeaderItem = styled.span`
    font-size: 20px;
    font-weight: bold;
    line-height: 50%;
    display: flex;
    align-items: center;
    text-align: center;
`