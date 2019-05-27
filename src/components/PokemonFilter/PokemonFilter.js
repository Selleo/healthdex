import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import startCase from 'lodash/startCase'
import { fetchPokemonList } from '../../store/pokemons/operations';
import { usePokemonTypes } from '../../hooks/usePokemonTypes';
import { PokemonTypeButton } from "./PokemonTypeButton";
import { usePokemonListFetch } from '../../hooks/usePokemonListFetch';

export const PokemonFilter = memo(function PokemonFilter(props) {
  const { onPokemonListFetch } = props;
  const [selectedType, setType] = useState(null);
  const types = usePokemonTypes();

  usePokemonListFetch(onPokemonListFetch, selectedType);

  return (
    <div className='pokemon-filter'>
      <PokemonTypeButton
        type={null}
        onClick={setType}
        label="All"
        isActive={selectedType === null}
      />
      {types.map(type => (
        <PokemonTypeButton
          key={type}
          type={type}
          label={startCase(type)}
          onClick={setType}
          isActive={type === selectedType}
        />
      ))}
    </div>
  )
});

const mapDispatchToProps = {
  onPokemonListFetch: fetchPokemonList,
}

export const PokemonFilterContainer = connect(null, mapDispatchToProps)(PokemonFilter)
