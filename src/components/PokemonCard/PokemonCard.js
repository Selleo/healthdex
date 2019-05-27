import React, { memo } from 'react'
import { PokemonNameContext } from '../../contexts/PokemonNameContext';
import { PokemonStatsContainer } from './PokemonStats';
import { PokemonAvatarContainer } from './PokemonAvatar';
import { PokemonNameContainer } from './PokemonName';
import { PokemonGenusContainer } from './PokemonGenus';
import { PokemonNationalNumberContainer } from './PokemonNationalNumber';

export const PokemonCard = memo(function PokemonCard(props) {
  const { pokemonName } = props;

  return (
    <PokemonNameContext.Provider value={pokemonName}>
      <div className='pokemon-card'>
        <div className='pokemon-card__img'>
          <PokemonAvatarContainer />
        </div>
        <div className='pokemon-card__info'>
          <PokemonNationalNumberContainer />
          <PokemonNameContainer />
          <PokemonGenusContainer />
        </div>
        <PokemonStatsContainer />
      </div>
    </PokemonNameContext.Provider>
  )
});

export const PokemonCardContainer = PokemonCard;
