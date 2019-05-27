import pick from 'lodash/pick';
import get from 'lodash/get';
import * as actionTypes from './acionTypes';

const initialState = {
  byName: {},
}

const matchEnglishLanguage = (nameData) => nameData.language.name === 'en';

const matchNationalPokedex = (pokedexData) => pokedexData.pokedex.name === 'national'

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_POKEMON_SPECIES: {
      const { payload: species } = action;

      const pickKeys = [
        'evolution_chain',
      ];

      return {
        ...state,
        byName: {
          ...state.byName,
          [species.name]: {
            ...pick(species, pickKeys),
            translatedGenus: species.genera.find(matchEnglishLanguage).genus,
            translatedName: species.names.find(matchEnglishLanguage).name,
            nationalPokedexNumber: get(species.pokedex_numbers.find(matchNationalPokedex), 'entry_number', null),
          },
        },
      };
    }

    default: {
      return state;
    }
  }
}
