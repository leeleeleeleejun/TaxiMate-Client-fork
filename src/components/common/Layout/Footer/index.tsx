import {
  Container,
  Nav,
} from '@/components/common/Layout/Footer/Footer.style.ts'
import NavItemContainer from '@/components/common/Layout/Footer/NavItemContainer.tsx'

import TaxiIcon from '@/assets/footer/taxi-icon.svg?react'
import ChattingIcon from '@/assets/footer/chatting-icon.svg?react'
import CreateButtonIcon from '@/assets/footer/create-button-icon.svg?react'
import HistoryIcon from '@/assets/footer/history-icon.svg?react'
import UserIcon from '@/assets/footer/user-icon.svg?react'

const Footer = () => {
  return (
    <Container>
      <Nav>
        <NavItemContainer contentName={'메인'} path={'/'}>
          <TaxiIcon />
        </NavItemContainer>
        <NavItemContainer contentName={'채팅'} path={'/'}>
          <ChattingIcon />
        </NavItemContainer>
        <NavItemContainer path={'/'}>
          <CreateButtonIcon />
        </NavItemContainer>
        <NavItemContainer contentName={'이용내역'} path={'/'}>
          <HistoryIcon />
        </NavItemContainer>
        <NavItemContainer contentName={'내 정보'} path={'/'}>
          <UserIcon />
        </NavItemContainer>
      </Nav>
    </Container>
  )
}

export default Footer
