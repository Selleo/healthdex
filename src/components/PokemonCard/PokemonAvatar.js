import React from 'react'
import flowRight from 'lodash/flowRight'
import { withPokemonName } from '../../hocs/withPokemonName';
import { withPokemonAvatar } from '../../hocs/withPokemonAvatar';

export function PokemonAvatar(props) {
  const { pokemonAvatar, pokemonName } = props;

  return (
    <div className='pokemon-card__img'>
      <img src={pokemonAvatar} alt={pokemonName} />
    </div>
  )
}


export const PokemonAvatarContainer = flowRight([
  withPokemonName,
  withPokemonAvatar,
])(PokemonAvatar)
