import * as api from '../../api'
import { addSpecies } from './actions';
import { hasSpecies } from './selectors';

export const fetchSpecies = (speciesName) => async (dispatch, getState) => {
  const state = getState();

  if (hasSpecies(state, speciesName)) {
    return;
  }

  const species = await api.getPokemonSpeciesByName(speciesName)
  dispatch(addSpecies(species));
}
