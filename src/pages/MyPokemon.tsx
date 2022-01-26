import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: "red";
`;

interface MyPokemonProps {}

const MyPokemon: React.FC<MyPokemonProps> = (props) => {
  return (
    <Container>
      <h1>MyPokemonPage</h1>
    </Container>
  );
};

export default MyPokemon;
