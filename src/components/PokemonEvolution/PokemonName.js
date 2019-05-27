import React, { memo } from 'react'
import { withTranslatedPokemonName } from '../../hocs/withTranslatedPokemonName';

export const PokemonName = memo(function PokemonName(props) {
  const { translatedPokemonName } = props;

  return (
    <strong>{translatedPokemonName}</strong>
  );
});

export const PokemonNameContainer = withTranslatedPokemonName(PokemonName);
