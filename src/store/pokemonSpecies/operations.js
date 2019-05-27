import * as api from '../../api'
import { addSpecies } from './actions';
import { hasSpecies, getSpeciesByName } from './selectors';

export const fetchSpecies = (speciesName) => async (dispatch, getState) => {
  const state = getState();

  if (hasSpecies(state, speciesName)) {
    return getSpeciesByName(state, speciesName);
  }

  const species = await api.getPokemonSpeciesByName(speciesName)

  dispatch(addSpecies(species));

  return getSpeciesByName(getState(), speciesName);
}
