import * as actionTypes from "./actionTypes";

export const fetchPokemonListRequest = () => ({
  type: actionTypes.FETCH_POKEMON_LIST_REQUEST,
})

export const fetchPokemonListSuccess = (payload) => ({
  type: actionTypes.FETCH_POKEMON_LIST_SUCCESS,
  payload,
})

export const fetchPokemonListFailure = () => ({
  type: actionTypes.FETCH_POKEMON_LIST_FAILURE,
})

export const fetchPokemonOneRequest = (payload) => ({
  type: actionTypes.FETCH_POKEMON_ONE_REQUEST,
  payload,
})

export const fetchPokemonOneSuccess = (payload) => ({
  type: actionTypes.FETCH_POKEMON_ONE_SUCCESS,
  payload,
})

export const fetchPokemonOneFailure = (payload) => ({
  type: actionTypes.FETCH_POKEMON_ONE_FAILURE,
  error: true,
  payload,
})
