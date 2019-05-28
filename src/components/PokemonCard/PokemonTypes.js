import React from 'react'
import flowRight from 'lodash/flowRight';
import { withPokemonName } from '../../hocs/withPokemonName';
import { withPokemonTypes } from '../../hocs/withPokemonTypes';

export function PokemonTypes(props) {
  const { pokemonTypes } = props;

  return (
    <p>
      Type:&nbsp;
      {pokemonTypes.map(type => (
        <span key={type} className={`pokemon-type -${type}`}>{type}</span>
      ))}
    </p>
  )
}


export const PokemonTypesContainer = flowRight([
  withPokemonName,
  withPokemonTypes,
])(PokemonTypes);
