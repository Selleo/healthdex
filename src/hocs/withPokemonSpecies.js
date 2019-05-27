import React, { memo } from "react";
import { usePokemonSpecies } from "../hooks/usePokemonSpecies";

export function withPokemonSpecies(WrappedComponent) {
  function PokemonSpecies(props) {
    const pokemonSpecies = usePokemonSpecies();

    return (
      <WrappedComponent {...props} pokemonName={pokemonSpecies} />
    )
  }

  return memo(PokemonSpecies);
}
