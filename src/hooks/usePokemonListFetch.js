import { useEffect } from "react";

export function usePokemonListFetch(fetcher, type) {
  const deps = [fetcher, type];

  const handler = () => {
    fetcher(type)
  }

  useEffect(handler, deps)
}
