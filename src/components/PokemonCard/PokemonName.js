import React from 'react'
import flowRight from 'lodash/flowRight'
import { withPokemonName } from '../../hocs/withPokemonName';
import { withTranslatedPokemonName } from '../../hocs/withTranslatedPokemonName';

export function PokemonName(props) {
  const { translatedPokemonName } = props;

  return (
    <p>
      Name:{' '}
      <strong>{translatedPokemonName}</strong>
    </p>
  )
}

export const PokemonNameContainer = flowRight([
  withPokemonName,
  withTranslatedPokemonName,
])(PokemonName)
