import React from 'react'
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight'
import { getPokemonTranslatedName } from '../../store/pokemons/selectors';
import { withPokemonName } from '../../hocs/withPokemonName';

export function PokemonName(props) {
  const { translatedPokemonName } = props;

  return (
    <span>
      Name:{' '}
      <strong>{translatedPokemonName}</strong>
    </span>
  )
}

const mapStateToProps = (state, ownProps) => ({
  translatedPokemonName: getPokemonTranslatedName(state, ownProps.pokemonName)
});

export const PokemonNameContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps)
])(PokemonName)
