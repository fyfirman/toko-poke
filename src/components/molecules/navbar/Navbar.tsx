import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Logo from "~/assets/images/logo.png";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const NavItem = styled(Link)<{ isHidden?: boolean }>`
  min-width: 64px;
  visibility: ${({ isHidden }) => (isHidden ? "hidden" : "inherit")};
`;

interface NavbarProps {
  canBack?: boolean;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { canBack = false } = props;
  return (
    <Container>
      <NavItem isHidden={!canBack} to="/">
        back
      </NavItem>
      <NavItem to="/">
        <img alt="Toko Poke Logo" src={Logo} />
      </NavItem>
      <NavItem to="/my-pokemon">Item Count</NavItem>
    </Container>
  );
};

export default Navbar;
