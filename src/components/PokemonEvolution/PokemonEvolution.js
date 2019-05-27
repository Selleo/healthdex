import React from 'react';
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight'
import { getPokemonEvolutionChain } from '../../store/pokemonSpecies/selectors';
import { usePokemonEvolution } from '../../hooks/usePokemonEvolution';
import { withPokemonName } from '../../hocs/withPokemonName';
import { Loader } from '../Loader';
import { EvolutionStep } from './EvolutionStep';

export function PokemonEvolution(props) {
  const evolution = usePokemonEvolution(props.pokemonEvolutionId);

  if (!evolution) {
    return <Loader />
  }

  return (
    <EvolutionStep evolution={evolution} />
  )
}

const mapStateToProps = (state, ownProps) => ({
  pokemonEvolutionId: getPokemonEvolutionChain(state, ownProps.pokemonName),
})

export const PokemonEvolutionContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps)
])(PokemonEvolution)
