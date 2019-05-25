import React from 'react'
import { connect } from 'react-redux'
import flowRight from 'lodash/flowRight'
import { getPokemonAvatar } from '../../store/pokemons/selectors';
import { withPokemonName } from '../../hocs/withPokemonName';

export function PokemonAvatar(props) {
  const { pokemonAvatar, pokemonName } = props;

  return pokemonAvatar && <img src={pokemonAvatar} alt={pokemonName} />
}

const mapStateToProps = (state, ownProps) => ({
  pokemonAvatar: getPokemonAvatar(state, ownProps.pokemonName)
});

export const PokemonAvatarContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps)
])(PokemonAvatar)
