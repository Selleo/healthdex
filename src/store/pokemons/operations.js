import { getPokemonList, hasPokemon } from './selectors';
import {
  fetchPokemonListRequest,
  fetchPokemonListSuccess,
  fetchPokemonListFailure,
  fetchPokemonOneRequest,
  fetchPokemonOneSuccess,
} from './actions';
import * as api from '../../api'
import { fetchSpecies } from '../pokemonSpecies/operations';

export const fetchPokemonList = (type = null) => async (dispatch) => {
  dispatch(fetchPokemonListRequest());

  try {
    const request = type ? api.getPokemonListByType(type) : api.getPokemonList();
    const pokemons = await request;

    dispatch(fetchPokemonListSuccess(pokemons))
  } catch (error) {
    dispatch(fetchPokemonListFailure());
  }
}

export const fetchPokemon = (name) => async (dispatch, getState) => {
  const state = getState();

  if (hasPokemon(state, name)) {
    return;
  }

  dispatch(fetchPokemonOneRequest(name));
  const pokemon = await api.getPokemonByName(name);
  const form = await api.getPokemonFormByName(name);

  await fetchSpecies(pokemon.species.name)(dispatch, getState);

  dispatch(
    fetchPokemonOneSuccess({
      ...pokemon,
      sprites: form.sprites,
      names: form.names,
    })
  );
}

export const fetchMissingPokemons = (offset, limit) => async (dispatch, getState) => {
  const state = getState();
  const list = getPokemonList(state);

  list.slice(offset, offset + limit).forEach(name => {
    fetchPokemon(name)(dispatch, getState);
  })
}
