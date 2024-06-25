import {ReactNode} from "react";
import {Container} from "@/components/Layout/Header/Header.style.ts";

const Header = ({ children }: { children: ReactNode }) => {
  return(
    <Container>
      {children}
    </Container>)
}

export default Header;

