import React from 'react'
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import { withPokemonName } from '../../hocs/withPokemonName';
import { getPokemonTranslatedGenus } from '../../store/pokemonSpecies/selectors';

export function PokemonGenus(props) {
  const { pokemonGenus } = props;

  return (
    <p className='pokemon-card__genus'>
      {pokemonGenus}
    </p>
  )
}

const mapStateToProps = (state, ownProps) => ({
  pokemonGenus: getPokemonTranslatedGenus(state, ownProps.pokemonName)
})

export const PokemonGenusContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps),
])(PokemonGenus);
