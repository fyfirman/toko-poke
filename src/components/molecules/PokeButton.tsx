import React from "react";
import styled from "@emotion/styled";
import PokeBall from "~/assets/images/poke-ball.svg";

const Container = styled.button<{ color?: string }>`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.amethyst};
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }
  &:focus,
  &:active {
    transform: scale(0.975) rotate(1080deg);
  }
`;

interface PokeButtonProps {
  onClick?: () => void;
  className?: string;
}

const PokeButton: React.FC<PokeButtonProps> = ({ onClick, className }) => {
  return (
    <Container className={className} onClick={onClick}>
      <img alt="Poke ball button" src={PokeBall} />
    </Container>
  );
};

export default PokeButton;
