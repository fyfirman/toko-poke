import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Logo from "~/assets/images/logo.png";
import BackIcon from "~/assets/images/chevron-back-outline.svg";
import Chip from "~/components/atoms/Chip";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
`;

const NavItem = styled(Link, { shouldForwardProp: (props) => props !== "isHidden" })<{ isHidden?: boolean }>`
  min-width: 64px;
  visibility: ${({ isHidden }) => (isHidden ? "hidden" : "inherit")};
  justify-content: center;
  display: flex;
`;

interface NavbarProps {
  canBack?: boolean;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { canBack = false } = props;
  return (
    <Container>
      <NavItem isHidden={!canBack} to="/">
        <img alt="Back Icon" src={BackIcon} />
      </NavItem>
      <NavItem to="/">
        <img alt="Toko Poke Logo" src={Logo} />
      </NavItem>
      <NavItem to="/my-pokemon">
        <Chip>10</Chip>
      </NavItem>
    </Container>
  );
};

export default Navbar;
