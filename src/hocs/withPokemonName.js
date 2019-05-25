import React, { memo } from "react";
import { usePokemonName } from "../hooks/usePokemonName";

export function withPokemonName(WrappedComponent) {
  function NamedPokemon(props) {
    const pokemonName = usePokemonName();

    return (
      <WrappedComponent {...props} pokemonName={pokemonName} />
    )
  }

  return memo(NamedPokemon);
}
