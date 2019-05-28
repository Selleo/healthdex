import React from 'react'
import { connect } from 'react-redux'
import { fetchPokemonsFromSpecies } from '../../store/pokemons/operations';
import { isPokemonLoading, hasPokemon } from '../../store/pokemons/selectors';
import { usePokemonFetch } from '../../hooks/usePokemonFetch';
import { PokemonNameContainer } from './PokemonName';
import { PokemonAvatarContainer } from './PokemonAvatar';
import { PokemonNationalNumberContainer } from './PokemonNationalNumber';
import { getDefaultSpeciesPokemon } from '../../store/pokemonSpecies/selectors';
import { PokemonTypesContainer } from './PokemonTypes';

export function PokemonShortInfo(props) {
  const { speciesName, pokemonName, isLoading, onPokemonFetch, pokemonExists } = props;

  usePokemonFetch(speciesName, onPokemonFetch);

  if (isLoading || !pokemonExists) {
    return (
      <div className='pokeball' />
    )
  }

  return (
    <div>
      <PokemonAvatarContainer pokemonName={pokemonName} />
      <PokemonNationalNumberContainer pokemonName={pokemonName} />
      <PokemonNameContainer pokemonName={pokemonName} />
      <PokemonTypesContainer pokemonName={pokemonName} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const pokemonName = getDefaultSpeciesPokemon(state, ownProps.speciesName);

  return {
    pokemonName,
    isLoading: isPokemonLoading(state, pokemonName),
    pokemonExists: hasPokemon(state, pokemonName),
  }
}

const mapDispatchToProps = {
  onPokemonFetch: fetchPokemonsFromSpecies,
}

export const PokemonShortInfoContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonShortInfo)
