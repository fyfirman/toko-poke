export interface IPokemon {
  pokemonName: string;
  name?: string;
  id: number;
}

export interface IMyPokemon extends Omit<IPokemon, "name"> {
  uuid: string;
  born: Date;
  name: string;
}
