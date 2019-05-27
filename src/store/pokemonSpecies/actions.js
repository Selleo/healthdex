import * as actionTypes from "./acionTypes";

export function addSpecies(payload) {
  return {
    type: actionTypes.ADD_POKEMON_SPECIES,
    payload,
  }
}
