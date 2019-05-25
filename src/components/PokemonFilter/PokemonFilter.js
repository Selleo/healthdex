import React, { memo } from 'react';
import startCase from 'lodash/startCase'
import { PokemonTypeButton } from "./PokemonTypeButton";
import { usePokemonTypes } from '../../hooks/usePokemonTypes';

export const PokemonFilter = memo(function PokemonFilter(props) {
  const { onFilterChange, selectedFilter } = props;
  const types = usePokemonTypes();

  return (
    <>
      <PokemonTypeButton
        type={null}
        onClick={onFilterChange}
        label="Reset"
        isActive={false}
      />
      &nbsp;&bull;&nbsp;
      {types.map(type => (
        <PokemonTypeButton
          key={type}
          type={type}
          label={startCase(type)}
          onClick={onFilterChange}
          isActive={type === selectedFilter}
        />
      ))}
    </>
  )
});
