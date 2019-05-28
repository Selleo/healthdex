import React from 'react'
import flowRight from 'lodash/flowRight';
import startCase from 'lodash/startCase';
import { withPokemonName } from '../../hocs/withPokemonName';
import { withPokemonTypes } from '../../hocs/withPokemonTypes';

export function PokemonTypes(props) {
  const { pokemonTypes } = props;

  return (
    <p>
      Type:
      {pokemonTypes.map((type) => (
        <span key={type}>
          {' '}<span className="btn -primary">{startCase(type)}</span>
        </span>
      ))}
    </p>
  )
}


export const PokemonTypesContainer = flowRight([
  withPokemonName,
  withPokemonTypes,
])(PokemonTypes);
