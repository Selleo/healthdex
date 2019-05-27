import get from 'lodash/get'
import { createSelector } from 'reselect';
import fallbackAvatar from '../../images/placeholder.png';

export const getPokemonMap = (state) => state.pokemons.byName;

export const getPokemonList = (state) => state.pokemons.list;

export const getPokemonListSize = (state) => state.pokemons.list.length;

export const isPokemonListLoading = (state) => state.pokemons.loading;

export const getLoadedPokemonList = createSelector(
  getPokemonList,
  getPokemonMap,
  (list, byName) => list.filter(name => byName.hasOwnProperty(name))
);

export const getLoadedPokemonListSize = state => getLoadedPokemonList(state).length;

export const hasPokemon = (state, name) => state.pokemons.byName.hasOwnProperty(name);

export const isPokemonLoading = (state, name) => get(state, ['pokemons', 'byName', name, 'loading']);

export const getPokemonByName = (state, name) => state.pokemons.byName[name];

export const getPokemonAvatar = (state, name) => {
  const { sprites } = getPokemonByName(state, name);

  return sprites.front_default || fallbackAvatar;
};

export const getPokemonTypes = (state, name) => getPokemonByName(state, name).types;

export const getPokemonStats = (state, name) => getPokemonByName(state, name).stats;

export const getPokemonAbilities = (state, name) => getPokemonByName(state, name).abilities;

export const getPokemonMoves = (state, name) => getPokemonByName(state, name).moves;

export const getPokemonHeight = (state, name) => getPokemonByName(state, name).height / 10;

export const getPokemonWeight = (state, name) => getPokemonByName(state, name).weight / 10;


