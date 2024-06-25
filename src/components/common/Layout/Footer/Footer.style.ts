import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.footer`
    height: 60px;

    padding: 10px 20px;
    z-index: 999;
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NavItem = styled(Link)``