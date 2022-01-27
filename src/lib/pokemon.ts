type PokemonImageTypes = "official-artwork";

export const getImageUrlByID = (id: number, type?: PokemonImageTypes) => {
  switch (type) {
    case "official-artwork":
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    default:
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
};
