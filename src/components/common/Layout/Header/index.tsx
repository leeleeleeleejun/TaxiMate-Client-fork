import {ReactNode} from "react";
import {Container} from "@/components/common/Layout/Header/Header.style.ts";

const Header = ({ children }: { children: ReactNode }) => {
  return(
    <Container>
      {children}
    </Container>)
}

export default Header;

