import React from 'react'
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import startCase from 'lodash/startCase';
import { withPokemonName } from '../../hocs/withPokemonName';
import { getPokemonTypes } from '../../store/pokemons/selectors';

export function PokemonTypes(props) {
  const { pokemonTypes } = props;

  return (
    <p>
      Type:
      {pokemonTypes.map((type) => (
        <span key={type}>
          {' '}<span className="btn -primary">{startCase(type)}</span>
        </span>
      ))}
    </p>
  )
}

const mapStateToProps = (state, ownProps) => ({
  pokemonTypes: getPokemonTypes(state, ownProps.pokemonName)
})

export const PokemonTypesContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps),
])(PokemonTypes);
