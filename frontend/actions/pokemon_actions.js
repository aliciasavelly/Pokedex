import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const REQUEST_ONE_POKEMON = "REQUEST_ONE_POKEMON";
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";
export const RECEIVE_ONE_ITEM = "RECEIVE_ONE_ITEM";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
})

export const receiveOnePokemon = poke => ({
  type: RECEIVE_ONE_POKEMON,
  poke
})

export const receiveOneItem = item => {
  type: RECEIVE_ONE_ITEM,
  item
}

//thunk action creator
export const requestAllPokemon = () => (dispatch) => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
}

//thunk action creator
export const requestOnePokemon = (pokeId) => (dispatch) => {
  return APIUtil.fetchOnePokemon(pokeId)
    .then(poke => dispatch(receiveOnePokemon(poke)));
}

export const requestOneItem = (pokeId, itemId) => (dispatch) => {
  return APIUtil.fetchOneItem(pokeId, itemId)
    .then(item => dispatch(receiveOneItem(item)))
}

window.receiveOnePokemon = receiveOnePokemon;
window.requestOnePokemon = requestOnePokemon;
