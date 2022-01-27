import React, { useCallback } from "react";
import styled from "@emotion/styled";
import PokeCard from "~/components/molecules/PokeCard";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_LIST } from "~/graphql/PokemonOperation";
import { Query } from "~/interfaces/graphql";
import { IPokemon } from "~/interfaces/pokemon";

const Container = styled.div`
  background-color: "red";
  padding: 0 1rem;

  & > div {
    margin-top: 0.5rem;
  }
`;

const Home: React.FC = () => {
  const history = useHistory();
  const { data } = useQuery<Query>(GET_POKEMON_LIST);

  const handleCardClick = useCallback((pokemon: IPokemon) => {
    history.push(`/pokemon/${pokemon.pokemonName}`);
  }, []);

  return (
    <Container>
      {data?.pokemons?.results?.map((pokemon) => (
        <PokeCard
          key={pokemon?.id}
          id={pokemon?.id as number}
          imageUrl={pokemon?.image as string}
          onClick={handleCardClick}
          pokemonName={pokemon?.name as string}
        />
      ))}
    </Container>
  );
};

export default React.memo(Home);
