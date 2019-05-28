import React from 'react';
import startCase from 'lodash/startCase';
import { withPokemonTypes } from '../../hocs/withPokemonTypes';

export function PokemonTypes(props) {
  const { pokemonTypes } = props;

  return (
    <div>
      {pokemonTypes.reduce((prev, type) => [
        ...prev,
        ', ',
        startCase(type),
      ])}
    </div>
  );
}

export const PokemonTypesContainer = withPokemonTypes(PokemonTypes);
