import omit from 'lodash/omit'
import * as actionTypes from './actionTypes';

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

    case actionTypes.FETCH_POKEMON_ONE_SUCCESS: {
      const { payload: pokemon } = action;
      const omitKeys = [
        'held_items',
        'game_indicies',
        'species',
        'evolves_from_species',
        'flavor_text_entries',
        'egg_groups',
        'generation',
        'growth_rate',
        'forms_switchable',
        'form_descriptions',
        'forms',
        'order',
        'habitat',
        'hatch_counter',
        'varieties',
      ]

      return {
        ...state,
        byName: {
          ...state.byName,
          [pokemon.name]: {
            ...omit(pokemon, omitKeys),
            moves: pokemon.moves.map(moveData => moveData.move.name)
          },
        }
      };
    }

    default: {
      return state;
    }
  }
}
