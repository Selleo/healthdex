import React, { useState, useEffect, memo } from 'react';
import startCase from 'lodash/startCase'
import * as api from '../../api';
import { PokemonTypeButton } from "./PokemonTypeButton";

export const PokemonFilter = memo(function PokemonFilter(props) {
  const { onFilterChange, selectedFilter } = props;
  const [types, setTypes] = useState([]);

  useEffect(() => {
    api.getPokemonTypesList().then((typesList) => {
      const typeNames = typesList.map((typeData) => typeData.name);
      setTypes(typeNames);
    });
  }, [])

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
