import React from 'react'
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import { withPokemonName } from '../../hocs/withPokemonName';
import { getPokemonTranslatedGenus } from '../../store/pokemons/selectors';

export function PokemonGenus(props) {
  const { pokemonGenus } = props;

  return (
    <span>
      Species:{' '}
      <strong>{pokemonGenus}</strong>
    </span>
  )
}

const mapStateToProps = (state, ownProps) => ({
  pokemonGenus: getPokemonTranslatedGenus(state, ownProps.pokemonName)
})

export const PokemonGenusContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps),
])(PokemonGenus);
