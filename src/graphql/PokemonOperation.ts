import { gql } from "@apollo/client";

export const GET_POKEMON_LIST = gql`
  query getPokemonList {
    pokemons(limit: 10, offset: 0) {
      results {
        id
        image
        name
      }
    }
  }
`;
