import React from 'react'
import flowRight from 'lodash/flowRight'
import { withPokemonName } from '../../hocs/withPokemonName';
import { withTranslatedPokemonName } from '../../hocs/withTranslatedPokemonName';

export function PokemonName(props) {
  const { translatedPokemonName } = props;

  return (
    <div className='pokemon-card__name'>
      {translatedPokemonName}
    </div>
  )
}

export const PokemonNameContainer = flowRight([
  withPokemonName,
  withTranslatedPokemonName,
])(PokemonName)
