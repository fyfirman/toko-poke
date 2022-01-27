export interface IPokemon {
  pokemonName: string;
  name?: string;
  id: number;
}

export interface IMyPokemon extends IPokemon {
  uuid: string;
  born: Date;
}
