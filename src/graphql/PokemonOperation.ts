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

export const GET_POKEMON = gql`
  query getPokemon($name: String!) {
    pokemon(name: $name) {
      id
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;
