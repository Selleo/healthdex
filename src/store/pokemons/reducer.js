import pick from 'lodash/pick';
import get from 'lodash/get';
import * as actionTypes from './actionTypes';
import { matchEnglishLanguage } from '../utils';

const initialState = {
  loading: false,
  filter: null,
  list: [],
  byName: {},
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_POKEMON_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case actionTypes.FETCH_POKEMON_LIST_SUCCESS: {
      const list = action.payload.map(result => result.name);

      return {
        ...state,
        list,
        loading: false,
      }
    }

    case actionTypes.FETCH_POKEMON_ONE_REQUEST: {
      const { payload: name } = action;
      return {
        ...state,
        byName: {
          ...state.byName,
          [name]: {
            loading: true,
          }
        }
      };
    }

    case actionTypes.FETCH_POKEMON_ONE_SUCCESS: {
      const { payload: pokemon } = action;
      const pickKeys = [
        'abilities',
        'stats',
        'name',
        'sprites',
      ];

      return {
        ...state,
        byName: {
          ...state.byName,
          [pokemon.name]: {
            ...pick(pokemon, pickKeys),
            species: pokemon.species.name,
            types: pokemon.types.map(typeData => typeData.type.name),
            moves: pokemon.moves.map(moveData => moveData.move.name),
            translatedName: get(pokemon.names.find(matchEnglishLanguage), 'name'),
          },
        }
      };
    }

    default: {
      return state;
    }
  }
}
