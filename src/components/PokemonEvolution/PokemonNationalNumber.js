import React from 'react'
import { withPokemonNationalNumber } from '../../hocs/withPokemonNationalNumber';

export function PokemonNationalNumber(props) {
  const { pokemonNationalNumber } = props;
  return (
    <div>#{pokemonNationalNumber}</div>
  )
}

export const PokemonNationalNumberContainer = withPokemonNationalNumber(PokemonNationalNumber);
