import { combineReducers } from 'redux'
import { reducer as pokemons } from './pokemons/reducer'

export const rootReducer = combineReducers({
  pokemons,
})
