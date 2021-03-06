import get from 'lodash/get';
import * as actionTypes from './acionTypes';
import { matchEnglishLanguage, matchNationalPokedex } from '../utils';

const chainMatcher = /\/evolution-chain\/([\d]+?)\//;

const initialState = {
  byName: {},
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_POKEMON_SPECIES: {
      const { payload: species } = action;

      const [, evolutionChainId] = species.evolution_chain.url.match(chainMatcher);

      return {
        ...state,
        byName: {
          ...state.byName,
          [species.name]: {
            evolutionChainId,
            translatedGenus: species.genera.find(matchEnglishLanguage).genus,
            translatedName: species.names.find(matchEnglishLanguage).name,
            nationalPokedexNumber: get(species.pokedex_numbers.find(matchNationalPokedex), 'entry_number', null),
            varieties: species.varieties.map(variation => variation.pokemon.name),
          },
        },
      };
    }

    default: {
      return state;
    }
  }
}
