import { gql } from "@apollo/client";

export const GET_POKEMON_LIST = gql`
  query getPokemonList($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
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
      name
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
