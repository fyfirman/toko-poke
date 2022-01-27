import { createContext, useContext, useReducer } from "react";
import { IMyPokemon } from "~/interfaces/Pokemon";
import { LocalStorageKey } from "~/interfaces/LocalStorage";
import { MyPokemonAction, myPokemonReducer } from "./MyPokemonReducer";

type MyPokemonContextState = [IMyPokemon[], React.Dispatch<MyPokemonAction>];

const MyPokemonContext = createContext<MyPokemonContextState | undefined>(undefined);

const initialState: IMyPokemon[] = JSON.parse(localStorage.getItem(LocalStorageKey.MY_POKEMON_LIST) as string) || [];

const MyPokemonProvider = ({ children }: { children: React.ReactNode }) => {
  const reducer = useReducer(myPokemonReducer, initialState);

  return <MyPokemonContext.Provider value={reducer}>{children}</MyPokemonContext.Provider>;
};

const useMyPokemon = () => {
  const context = useContext(MyPokemonContext);
  if (context === undefined) {
    throw new Error("useMyPokemon must be used within a MyPokemonProvider");
  }
  return context;
};

export { MyPokemonProvider, useMyPokemon };
