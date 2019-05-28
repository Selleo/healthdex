import React from 'react'
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import { withPokemonName } from '../../hocs/withPokemonName';
import { getPokemonWeight } from '../../store/pokemons/selectors';

export function PokemonWeight(props) {
  const { pokemonHeight } = props;

  return (
    <p>
      Weight:{' '}
      <strong>{pokemonHeight.toFixed(1)}kg</strong>
    </p>
  )
}

const mapStateToProps = (state, ownProps) => ({
  pokemonHeight: getPokemonWeight(state, ownProps.pokemonName)
})

export const PokemonWeightContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps),
])(PokemonWeight);
