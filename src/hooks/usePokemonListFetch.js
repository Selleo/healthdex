import { useEffect } from "react";

export function usePokemonListFetch(fetcher, type) {
  const fetchHandler = () => {
    fetcher(type)
  }

  const scrollHandler = () => {
    window.scrollTo({
      top: 0
    })
  }

  useEffect(fetchHandler, [fetcher, type])
  useEffect(scrollHandler, [type]);
}
