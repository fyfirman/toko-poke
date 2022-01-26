import React from "react";
import styled from "@emotion/styled";

const Container = styled.nav`
  display: flex;
  align-items: space-between;
`;

const NavItem = styled.div<{ isHidden?: boolean }>`
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
      <NavItem isHidden={!canBack}>back</NavItem>
      <NavItem>logo</NavItem>
      <NavItem>Item Count</NavItem>
    </Container>
  );
};

export default Navbar;
