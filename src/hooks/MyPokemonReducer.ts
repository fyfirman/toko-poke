import { LocalStorageKey } from "~/interfaces/LocalStorage";
import { IMyPokemon, IPokemon } from "~/interfaces/Pokemon";
import { generateUUID } from "~/lib/Uuid";

export type MyPokemonActionType = "ADD" | "REMOVE";

export type MyPokemonAction = {
  type: MyPokemonActionType;
  payload: any;
};

const addPokemon = (pokemonList: IMyPokemon[], newPokemon: IPokemon) => {
  const newPokemonList: IMyPokemon[] = [...pokemonList, { ...newPokemon, uuid: generateUUID(), born: new Date() }];
  localStorage.setItem(LocalStorageKey.MY_POKEMON_LIST, JSON.stringify(newPokemonList));
  return newPokemonList;
};

const deletePokemon = (pokemonList: IMyPokemon[], pokemonUuid: IMyPokemon["uuid"]) => {
  const newPokemonList = pokemonList.filter((pokemon) => pokemon.uuid !== pokemonUuid);
  localStorage.setItem(LocalStorageKey.MY_POKEMON_LIST, JSON.stringify(newPokemonList));
  return newPokemonList;
};

const myPokemonReducer = (state: IMyPokemon[], action: MyPokemonAction) => {
  switch (action.type) {
    case "ADD":
      return addPokemon(state, action.payload as IPokemon);
    case "REMOVE":
      return deletePokemon(state, action.payload as IMyPokemon["uuid"]);
    default:
      throw new Error(`${action.type} is unhandled on myPokemonReducer`);
  }
};

export { myPokemonReducer };
