export const GET_LIST_POKEMON = `
query samplePokeAPIquery {
  pokemon_v2_pokemon(limit: 10, offset: 0) {
    name
    id
    pokemon_v2_pokemontypes{
      pokemon_v2_type{
        name
      }
    }
  }
}
`;
