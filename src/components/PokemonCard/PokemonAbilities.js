import React from 'react';
import startCase from 'lodash/startCase';
import flowRight from 'lodash/flowRight';
import { withPokemonName } from '../../hocs/withPokemonName';
import { connect } from 'react-redux';
import { getPokemonAbilities } from '../../store/pokemons/selectors';

export function PokemonAbilities(props) {
  const { pokemonAbilities } = props;

  return (
    <p>
      Abilities:{' '}
      {pokemonAbilities.map(ability => (
        <strong key={ability}>
          {startCase(ability)}{', '}
        </strong>
      ))}
    </p>
  )
}

const mapStateToProps = (state, ownProps) => ({
  pokemonAbilities: getPokemonAbilities(state, ownProps.pokemonName),
})

export const PokemonAbilitiesContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps)
])(PokemonAbilities);
