import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: "red";
`;

interface PokemonDetailProps {}

const PokemonDetail: React.FC<PokemonDetailProps> = (props) => {
  return (
    <Container>
      <h1>PokemonDetailPage</h1>
    </Container>
  );
};

export default PokemonDetail;
