import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import PokeCard from "~/components/molecules/PokeCard";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_LIST } from "~/graphql/PokemonOperation";
import { PokemonItem, Query } from "~/interfaces/Graphql";
import { IPokemon } from "~/interfaces/Pokemon";

const Container = styled.div`
  padding: 0 1rem;

  & > div {
    margin-top: 0.5rem;
  }
`;

const Home: React.FC = () => {
  const history = useHistory();

  const containerRef = useRef();

  const { data, loading, fetchMore } = useQuery<Query>(GET_POKEMON_LIST, {
    variables: {
      limit: 10,
      offset: 0,
    },
  });

  useEffect(() => {
    let observerRefValue: Element | null = null;
    const options = {
      root: null,
      rootMargin: "50% 0px",
      threshold: 0.25,
    };
    const observer = new IntersectionObserver(async (e) => {
      if (e[0].intersectionRatio < 0.1) {
        return;
      }
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
    }, options);

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (containerRef.current) {
      observer.observe(containerRef.current);
      observerRefValue = containerRef.current;
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  });

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
          <div ref={containerRef as any}>Loading...</div>
        </Container>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default Home;
