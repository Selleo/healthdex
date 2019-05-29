import React from 'react'
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import { withPokemonName } from '../../hocs/withPokemonName';
import { getPokemonWeight } from '../../store/pokemons/selectors';

export function PokemonWeight(props) {
  const { pokemonHeight } = props;

  return (
    <div className='pokemon-stat -weight'>
      {pokemonHeight.toFixed(1)}kg
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  pokemonHeight: getPokemonWeight(state, ownProps.pokemonName)
})

export const PokemonWeightContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps),
])(PokemonWeight);
