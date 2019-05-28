import React from 'react';
import { withPokemonTypes } from '../../hocs/withPokemonTypes';

export function PokemonTypes(props) {
  const { pokemonTypes } = props;

  return (
    <div className='pokemon-types'>
      {pokemonTypes.map((type) => (
        <span className={`pokemon-type -${type}`}>{type}</span>
      ))}
    </div>
  );
}

export const PokemonTypesContainer = withPokemonTypes(PokemonTypes);
