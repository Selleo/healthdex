import get from 'lodash/get'
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
import { matchPokemonForm } from '../utils';

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
  const needsForm = pokemon.name !== pokemon.species.name;
  const hasForm = pokemon.forms.find(matchPokemonForm(name));
  const form = hasForm && needsForm ? await api.getPokemonFormByName(name) : null;

  await fetchSpecies(pokemon.species.name)(dispatch, getState);

  dispatch(
    fetchPokemonOneSuccess({
      ...pokemon,
      sprites: get(form, 'sprites', pokemon.sprites),
      names: get(form, 'names', []),
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
