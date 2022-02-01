import React, { useCallback } from "react";
import styled from "@emotion/styled";
import PokeCard from "~/components/molecules/PokeCard";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_LIST } from "~/graphql/PokemonOperation";
import { PokemonItem, Query } from "~/interfaces/Graphql";
import { IPokemon } from "~/interfaces/Pokemon";
import useScroll from "~/hooks/useScroll";
import Loading from "~/components/atoms/Loading";

const Container = styled.div`
  padding: 0 1rem;

  & > div {
    margin-top: 0.5rem;
  }
`;

const Home: React.FC = () => {
  const history = useHistory();

  const { data, loading, fetchMore } = useQuery<Query>(GET_POKEMON_LIST, {
    variables: {
      limit: 10,
      offset: 0,
    },
  });

  const loadMore = useCallback(() => {
    void fetchMore({
      variables: {
        offset: data?.pokemons?.results?.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          ...prev,
          pokemons: {
            results: [
              ...(prev.pokemons?.results as PokemonItem[]),
              ...(fetchMoreResult.pokemons?.results as PokemonItem[]),
            ],
          },
        };
      },
    });
  }, [data?.pokemons?.results?.length, fetchMore]);

  const { intersectionAreaRef } = useScroll(loadMore);

  const handleCardClick = (pokemon: IPokemon) => {
    history.push(`/pokemon/${pokemon.pokemonName}`);
  };

  return (
    <div>
      {!loading ? (
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
          <div ref={intersectionAreaRef as any}>
            <Loading full />
          </div>
        </Container>
      ) : (
        <Loading full />
      )}
    </div>
  );
};

export default Home;
