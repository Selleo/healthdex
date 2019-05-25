import React, { useState } from 'react';
import { connect } from 'react-redux'
import { fetchPokemonList } from "../../store/pokemons/operations";
import { usePokemonListFetch } from "../../hooks/usePokemonListFetch";
import { PokemonListContainer } from "../PokemonList";
import { PokemonFilter } from "../PokemonFilter";

export function Pokedex(props) {
  const { onPokemonListFetch } = props;
  const [type, setType] = useState(null);

  usePokemonListFetch(onPokemonListFetch, type);

  return (
    <>
      <PokemonFilter onFilterChange={setType} selectedFilter={type} />
      <PokemonListContainer />
    </>
  )
}

const mapDispatchToProps = {
  onPokemonListFetch: fetchPokemonList,
}

export const PokedexContainer = connect(null, mapDispatchToProps)(Pokedex);
