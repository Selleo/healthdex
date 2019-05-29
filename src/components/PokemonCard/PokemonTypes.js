import React from 'react'
import flowRight from 'lodash/flowRight';
import { withPokemonName } from '../../hocs/withPokemonName';
import { withPokemonTypes } from '../../hocs/withPokemonTypes';

export function PokemonTypes(props) {
  const { pokemonTypes } = props;

  return (
    <div className='pokemon-types'>
      {pokemonTypes.map((type) => (
        <span key={type} className={`pokemon-type -${type}`}>{type}</span>
      ))}
    </div>
  )
}


export const PokemonTypesContainer = flowRight([
  withPokemonName,
  withPokemonTypes,
])(PokemonTypes);
