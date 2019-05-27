import React from 'react'
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight'
import { withPokemonName } from '../../hocs/withPokemonName';
import { getPokemonTranslatedName } from '../../store/pokemonSpecies/selectors';

export function PokemonName(props) {
  const { translatedPokemonName } = props;

  return (
    <p>
      Name:{' '}
      <strong>{translatedPokemonName}</strong>
    </p>
  )
}

const mapStateToProps = (state, ownProps) => ({
  translatedPokemonName: getPokemonTranslatedName(state, ownProps.pokemonName)
});

export const PokemonNameContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps)
])(PokemonName)
