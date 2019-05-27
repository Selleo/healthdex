import { combineReducers } from 'redux'
import { reducer as pokemons } from './pokemons/reducer'
import { reducer as pokemonSpecies } from './pokemonSpecies/reducer'

export const rootReducer = combineReducers({
  pokemons,
  pokemonSpecies,
})
