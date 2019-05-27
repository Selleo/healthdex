import { useContext } from 'react';
import { PokemonSpeciesContext } from '../contexts/PokemonSpeciesContext';

export function usePokemonSpecies() {
  return useContext(PokemonSpeciesContext);
}
