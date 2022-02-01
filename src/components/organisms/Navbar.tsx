import React from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import Logo from "~/assets/images/logo.png";
import BackIcon from "~/assets/images/chevron-back-outline.svg";
import PokeIcon from "~/assets/images/poke-icon.svg";
import Chip from "~/components/atoms/Chip";
import { useMyPokemon } from "~/hooks/MyPokemonProvider";

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

const MyPokemonContainer = styled.div`
  position: relative;

  & > span {
    position: absolute;
    right: -6px;
    bottom: -4px;
  }
`;

interface NavbarProps {
  canBack?: boolean;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [myPokemonList] = useMyPokemon();

  const location = useLocation();

  return (
    <Container>
      <NavItem isHidden={location.pathname === "/" || location.pathname === "/home"} to="/">
        <img alt="Back Icon" height={30} src={BackIcon} width={30} />
      </NavItem>
      <NavItem to="/">
        <img alt="Toko Poke Logo" height={39} src={Logo} width={105} />
      </NavItem>
      <NavItem to="/my-pokemon">
        <MyPokemonContainer>
          <img alt="My Pokemon Icon" height={30} src={PokeIcon} width={30} />
          <Chip>{myPokemonList.length}</Chip>
        </MyPokemonContainer>
      </NavItem>
    </Container>
  );
};

export default Navbar;
