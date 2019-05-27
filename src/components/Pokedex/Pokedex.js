import React from 'react';
import { PokemonListContainer } from "../PokemonList";
import { PokemonFilterContainer } from "../PokemonFilter";

export function Pokedex() {
  return (
    <>
      <PokemonFilterContainer />
      <PokemonListContainer />
    </>
  )
}

export const PokedexContainer = Pokedex;
