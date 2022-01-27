export interface PokemonV2Type {
  name: string;
}

export interface PokemonV2PokemonTypes {
  pokemon_v2_type: PokemonV2Type;
}

export interface PokemonListPayload {
  name: string;
  id: number;
  pokemon_v2_pokemontypes: PokemonV2PokemonTypes[];
}
