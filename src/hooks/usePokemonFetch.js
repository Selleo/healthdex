import { useEffect } from 'react';

export function usePokemonFetch(pokemomName, fetcher) {
  const fetchHandler = () => {
    fetcher(pokemomName)
  }

  useEffect(fetchHandler, [fetchHandler, pokemomName])
}
