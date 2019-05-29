import React from 'react';
import { connect } from 'react-redux';
import startCase from 'lodash/startCase';
import flowRight from 'lodash/flowRight';
import { withPokemonName } from '../../hocs/withPokemonName';
import { getPokemonAbilities } from '../../store/pokemons/selectors';

export function PokemonAbilities(props) {
  const { pokemonAbilities } = props;

  return (
    <div className='pokemon-card__abilities'>
      {pokemonAbilities.map(ability => (
        <span className='pokemon-card__ability' key={ability}>
          {startCase(ability)}
        </span>
      ))}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  pokemonAbilities: getPokemonAbilities(state, ownProps.pokemonName),
})

export const PokemonAbilitiesContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps)
])(PokemonAbilities);
