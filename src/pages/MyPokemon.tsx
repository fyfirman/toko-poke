import React from "react";
import styled from "@emotion/styled";
import PokeCard from "~/components/molecules/PokeCard";
import { getImageUrlByID } from "~/lib/pokemon";
import { IMyPokemon } from "~/interfaces/Pokemon";
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

const MyPokemon: React.FC = () => {
  const [myPokemonList, dispatch] = useMyPokemon();

  const handleRelease = (uuid: IMyPokemon["uuid"]) => {
    dispatch({
      type: "REMOVE",
      payload: uuid,
    });
  };

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
            onRelease={() => handleRelease(pokemon.uuid)}
            pokemonName={pokemon.pokemonName}
            withAction
          />
        ))}
      </PokemonContainer>
    </div>
  );
};

export default React.memo(MyPokemon);
