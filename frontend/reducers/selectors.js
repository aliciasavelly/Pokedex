import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  // debugger;
  return state.poke.items[itemId];
};
