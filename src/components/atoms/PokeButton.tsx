import React from "react";
import styled from "@emotion/styled";
import PokeBall from "~/assets/images/poke-ball.svg";

const Container = styled.button`
  padding: 20px;
  background-color: ${({ theme }) => theme.color.electricViolet};
  border-radius: 100%;
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
