import React, { memo, useContext } from "react";
import { PokemonNameContext } from "../contexts/PokemonNameContext";

export function withPokemonName(WrappedComponent) {
  function NamedPokemon(props) {
    const pokemonName = useContext(PokemonNameContext);

    return (
      <WrappedComponent {...props} pokemonName={pokemonName} />
    )
  }

  return memo(NamedPokemon);
}
