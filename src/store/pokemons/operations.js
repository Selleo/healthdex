import * as actions from './actions';
import * as api from '../../api'
import { getPokemonList, hasPokemon } from './selectors';

export const fetchPokemonList = (type = null) => async (dispatch) => {
  dispatch(actions.fetchPokemonListRequest());

  try {
    const request = type ? api.getPokemonListByType(type) : api.getPokemonList();
    const pokemons = await request;

    dispatch(actions.fetchPokemonListSuccess(pokemons))
  } catch (error) {
    dispatch(actions.fetchPokemonListFailure());
  }
}

export const fetchPokemon = (name) => async (dispatch, getState) => {
  const state = getState();

  if (hasPokemon(state, name)) {
    return;
  }

  const [pokemon, species] = await Promise.all([
    api.getPokemonByName(name),
    api.getPokemonSpeciesByName(name),
  ])

  const payload = {
    ...pokemon,
    ...species,
  };

  dispatch(actions.fetchPokemonOneSuccess(payload));
}

export const fetchMissingPokemons = (offset, limit) => async (dispatch, getState) => {
  const state = getState();
  const list = getPokemonList(state);

  list.slice(offset, offset + limit).forEach(async name => {
    fetchPokemon(name)(dispatch, getState);
  })
}
