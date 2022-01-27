import React from "react";
import styled from "@emotion/styled";
import { pokemonList } from "~/__mocks__/pokemon";
import PokeCard from "~/components/molecules/PokeCard";
import { getImageUrlByID } from "~/lib/pokemon";

const Container = styled.div`
  background-color: "red";
  padding: 0 1rem;

  & > div {
    margin-top: 0.5rem;
  }
`;

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Container>
      {pokemonList.map((pokemon) => (
        <PokeCard
          key={pokemon.id}
          id={pokemon.id}
          imageUrl={getImageUrlByID(pokemon.id)}
          name={pokemon.name}
          types={pokemon.pokemon_v2_pokemontypes.map((type) => type.pokemon_v2_type.name)}
        />
      ))}
    </Container>
  );
};

export default Home;
