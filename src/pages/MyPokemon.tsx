import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { pokemonList } from "~/__mocks__/pokemon";
import PokeCard from "~/components/molecules/PokeCard";
import { getImageUrlByID } from "~/lib/pokemon";
import { useHistory } from "react-router-dom";
import { IPokemon } from "~/interfaces/Pokemon";
import { useMyPokemon } from "~/hooks/MyPokemonProvider";

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

  const [myPokemonList] = useMyPokemon();

  return (
    <div>
      <Header>My Pokemon</Header>
      <PokemonContainer>
        {myPokemonList.map((pokemon) => (
          <PokeCard
            key={pokemon.uuid}
            born={pokemon.born}
            id={pokemon.id}
            imageUrl={getImageUrlByID(pokemon.id)}
            name={pokemon.name}
            onClick={handleCardClick}
            pokemonName={pokemon.pokemonName}
          />
        ))}
      </PokemonContainer>
    </div>
  );
};

export default React.memo(MyPokemon);
