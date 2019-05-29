import React, { memo } from 'react'
import { withTranslatedPokemonName } from '../../hocs/withTranslatedPokemonName';

export const PokemonName = memo(function PokemonName(props) {
  const { translatedPokemonName } = props;

  return (
    <div className='pokemon-evolution__name'>{translatedPokemonName}</div>
  );
});

export const PokemonNameContainer = withTranslatedPokemonName(PokemonName);
