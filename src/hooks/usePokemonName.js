import { useContext } from 'react';
import { PokemonNameContext } from '../contexts/PokemonNameContext';

export function usePokemonName() {
  return useContext(PokemonNameContext);
}
