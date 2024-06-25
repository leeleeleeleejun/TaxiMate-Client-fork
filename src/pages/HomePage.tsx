import Header from "@/components/Layout/Header"
import TaxiIcon from "@/assets/header/taxi-icon.svg?react"
import KnuLogoIcon from "@/assets/header/knu-logo-icon.svg?react"
import Footer from "@/components/Layout/Footer";
import styled from "styled-components";

const HomePage = () => {
  return <>
    <Header>
      <HeaderItem>
        택시팟
        <TaxiIcon/>
      </HeaderItem>
      <KnuLogoIcon/>
    </Header>
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