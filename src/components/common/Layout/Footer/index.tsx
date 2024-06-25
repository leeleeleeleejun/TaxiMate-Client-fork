import {Container, Nav, NavItem} from "@/components/common/Layout/Footer/Footer.style.ts";
import TaxiIcon from "@/assets/footer/taxi-icon.svg?react";
import ChattingIcon from "@/assets/footer/chatting-icon.svg?react";
import  CreateButtonIcon from "@/assets/footer/create-button-icon.svg?react";
import HistoryIcon from "@/assets/footer/history-icon.svg?react";
import UserIcon from "@/assets/footer/user-icon.svg?react";

const Footer = () => {
  return (<Container>
    <Nav>
      <NavItem to={'/'}>
        <TaxiIcon/>
      </NavItem>
      <NavItem to={'/'}>
        <ChattingIcon/>
      </NavItem>
      <NavItem to={'/'}>
        <CreateButtonIcon/>
      </NavItem>
      <NavItem to={'/'}>
        <HistoryIcon/>
      </NavItem>
      <NavItem to={'/'}>
        <UserIcon/>
      </NavItem>
    </Nav>
  </Container>)
}

export default Footer