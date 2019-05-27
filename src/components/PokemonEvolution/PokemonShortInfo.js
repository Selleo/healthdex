import React from 'react'
import { connect } from 'react-redux'
import { fetchPokemon } from '../../store/pokemons/operations';
import { isPokemonLoading, hasPokemon } from '../../store/pokemons/selectors';
import { usePokemonFetch } from '../../hooks/usePokemonFetch';
import { PokemonNameContainer } from './PokemonName';
import { PokemonAvatarContainer } from './PokemonAvatar';
import { PokemonNationalNumberContainer } from './PokemonNationalNumber';

export function PokemonShortInfo(props) {
  const { pokemonName, isLoading, onPokemonFetch, pokemonExists } = props;

  usePokemonFetch(pokemonName, onPokemonFetch);

  if (isLoading || !pokemonExists) {
    return (
      <strong>
        Loading...
      </strong>
    )
  }

  return (
    <div>
      <PokemonAvatarContainer pokemonName={pokemonName} />
      <PokemonNameContainer pokemonName={pokemonName} />
      <PokemonNationalNumberContainer pokemonName={pokemonName} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  isLoading: isPokemonLoading(state, ownProps.pokemonName),
  pokemonExists: hasPokemon(state, ownProps.pokemonName),
})

const mapDispatchToProps = {
  onPokemonFetch: fetchPokemon,
}

export const PokemonShortInfoContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonShortInfo)
