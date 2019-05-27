import React from 'react'
import flowRight from 'lodash/flowRight'
import { withPokemonName } from '../../hocs/withPokemonName';
import { withPokemonNationalNumber } from '../../hocs/withPokemonNationalNumber';

export function PokemonNationalNumber(props) {
  const { pokemonNationalNumber } = props;

  return (
    <p>
      National &#8470;:{' '}
      <strong>{pokemonNationalNumber || 'unknown'}</strong>
    </p>
  )
}

export const PokemonNationalNumberContainer = flowRight([
  withPokemonName,
  withPokemonNationalNumber,
])(PokemonNationalNumber)
