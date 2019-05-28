import React from 'react'
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import startCase from 'lodash/startCase';
import { withPokemonName } from '../../hocs/withPokemonName';
import { getPokemonMoves } from '../../store/pokemons/selectors';

export function PokemonMoves(props) {
  const { pokemonMoves } = props;

  return (
    <div>
      {pokemonMoves.map(move => (
        <span key={move}>
          {startCase(move)}
        </span>
      ))}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  pokemonMoves: getPokemonMoves(state, ownProps.pokemonName)
})

export const PokemonMovesContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps),
])(PokemonMoves);
