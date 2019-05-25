import React from 'react'
import { PokemonNameContext } from '../../contexts/PokemonNameContext';
import { PokemonStatsContainer } from './PokemonStats';
import { PokemonAvatarContainer } from './PokemonAvatar';
import { PokemonNameContainer } from './PokemonName';
import { PokemonGenusContainer } from './PokemonGenus';
import { PokemonNationalNumberContainer } from './PokemonNationalNumber';

export function PokemonCard(props) {
  const { pokemonName } = props;

  return (
    <PokemonNameContext.Provider value={pokemonName}>
      <hr />
      <PokemonAvatarContainer />
      <br />
      <PokemonNationalNumberContainer />
      <br />
      <PokemonNameContainer />
      <br/>
      <PokemonGenusContainer />
      <br />
      <PokemonStatsContainer />
    </PokemonNameContext.Provider>
  )
}

export const PokemonCardContainer = PokemonCard;
