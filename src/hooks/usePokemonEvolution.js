import * as api from '../api'
import { useState, useEffect } from 'react';

export function usePokemonEvolution(evolutionId) {
  const [evolution, setEvolution] = useState(null);

  const handler = () => {
    api.getPokemonEvolutionById(evolutionId).then((evolution) => {
      setEvolution(evolution);
    })
  }

  useEffect(handler, [evolutionId]);

  return evolution;
}
