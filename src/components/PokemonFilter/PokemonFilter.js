import React, { memo } from 'react';
import startCase from 'lodash/startCase'
import { PokemonTypeButton } from "./PokemonTypeButton";
import { usePokemonTypes } from '../../hooks/usePokemonTypes';

export const PokemonFilter = memo(function PokemonFilter(props) {
  const { onFilterChange, selectedFilter } = props;
  const types = usePokemonTypes();

  return (
    <div className='pokemon-filter'>
      <PokemonTypeButton
        type={null}
        onClick={onFilterChange}
        label="All"
        isActive={selectedFilter === null}
      />
      {types.map(type => (
        <PokemonTypeButton
          key={type}
          type={type}
          label={startCase(type)}
          onClick={onFilterChange}
          isActive={type === selectedFilter}
        />
      ))}
    </div>
  )
});
