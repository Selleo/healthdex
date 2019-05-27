import React from 'react'
import { connect } from 'react-redux'
import flowRight from 'lodash/flowRight'
import { withPokemonName } from '../../hocs/withPokemonName';
import { getPokemonNationalNumber } from '../../store/pokemonSpecies/selectors';

export function PokemonNationalNumber(props) {
  const { pokemonNationalNumber } = props;

  return (
    <p>
      National &#8470;:{' '}
      <strong>{pokemonNationalNumber || 'unknown'}</strong>
    </p>
  )
}

const mapStateToProps = (state, ownProps) => ({
  pokemonNationalNumber: getPokemonNationalNumber(state, ownProps.pokemonName)
});

export const PokemonNationalNumberContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps)
])(PokemonNationalNumber)
