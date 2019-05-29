import React from 'react'
import flowRight from 'lodash/flowRight'
import { withPokemonName } from '../../hocs/withPokemonName';
import { withPokemonNationalNumber } from '../../hocs/withPokemonNationalNumber';

export function PokemonNationalNumber(props) {
  const { pokemonNationalNumber } = props;

  return (
    <div className='pokemon-card__id'>
      {pokemonNationalNumber && `#${pokemonNationalNumber}`}
      {!pokemonNationalNumber && '???'}
    </div>
  )
}

export const PokemonNationalNumberContainer = flowRight([
  withPokemonName,
  withPokemonNationalNumber,
])(PokemonNationalNumber)
