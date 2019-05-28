import React from 'react'
import { withPokemonNationalNumber } from '../../hocs/withPokemonNationalNumber';

export function PokemonNationalNumber(props) {
  const { pokemonNationalNumber } = props;

  return (
    <div className='evolution__id'>#{pokemonNationalNumber || 'unknown'}</div>
  )
}

export const PokemonNationalNumberContainer = withPokemonNationalNumber(PokemonNationalNumber);
