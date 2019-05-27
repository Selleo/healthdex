import pick from 'lodash/pick';
import get from 'lodash/get';
import * as actionTypes from './actionTypes';

const initialState = {
  loading: false,
  filter: null,
  list: [],
  byName: {},
}

const matchEnglishLanguage = (nameData) => nameData.language.name === 'en';

const matchNationalPokedex = (pokedexData) => pokedexData.pokedex.name === 'national'

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

    case actionTypes.FETCH_POKEMON_ONE_SUCCESS: {
      const { payload: pokemon } = action;
      const pickKeys = [
        'abilities',
        'stats',
        'name',
        'sprites',
        'evolution_chain',
      ];

      return {
        ...state,
        byName: {
          ...state.byName,
          [pokemon.name]: {
            ...pick(pokemon, pickKeys),
            types: pokemon.types.map(typeData => typeData.type.name),
            translatedGenus: pokemon.genera.find(matchEnglishLanguage).genus,
            translatedName: pokemon.names.find(matchEnglishLanguage).name,
            moves: pokemon.moves.map(moveData => moveData.move.name),
            nationalPokedexNumber: get(pokemon.pokedex_numbers.find(matchNationalPokedex), 'entry_number', null),
          },
        }
      };
    }

    default: {
      return state;
    }
  }
}
