import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { pokemonList } from "~/__mocks__/pokemon";
import PokeCard from "~/components/molecules/PokeCard";
import { getImageUrlByID } from "~/lib/pokemon";
import { useHistory } from "react-router-dom";
import { IPokemon } from "~/interfaces/pokemon";

const PokemonContainer = styled.div`
  background-color: "red";
  padding: 0 1rem;

  & > div {
    margin-top: 0.5rem;
  }
`;

const Header = styled.h1`
  font-size: 1.125rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

interface MyPokemonProps {}

const MyPokemon: React.FC<MyPokemonProps> = (props) => {
  const history = useHistory();

  const handleCardClick = useCallback((pokemon: IPokemon) => {
    history.push(`/pokemon/${pokemon.pokemonName}`);
  }, []);
  return (
    <div>
      <Header>My Pokemon</Header>
      <PokemonContainer>
        {pokemonList.map((pokemon) => (
          <PokeCard
            key={pokemon.id}
            id={pokemon.id}
            imageUrl={getImageUrlByID(pokemon.id)}
            onClick={handleCardClick}
            pokemonName={pokemon.name}
          />
        ))}
      </PokemonContainer>
    </div>
  );
};

export default React.memo(MyPokemon);
