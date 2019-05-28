import React from 'react'
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import { withPokemonName } from '../../hocs/withPokemonName';
import { getPokemonHeight } from '../../store/pokemons/selectors';

export function PokemonHeight(props) {
  const { pokemonHeight } = props;

  return (
    <p>
      Height:{' '}
      <strong>{pokemonHeight.toFixed(1)}m</strong>
    </p>
  )
}

const mapStateToProps = (state, ownProps) => ({
  pokemonHeight: getPokemonHeight(state, ownProps.pokemonName)
})

export const PokemonHeightContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps),
])(PokemonHeight);
