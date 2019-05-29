import React from 'react'
import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import startCase from 'lodash/startCase';
import { withPokemonName } from '../../hocs/withPokemonName';
import { getPokemonMoves } from '../../store/pokemons/selectors';

export function PokemonMoves(props) {
  const { pokemonMoves } = props;

  return (
    <div className='pokemon-moves'>
      <h3 className='pokemon-moves__header'>Moves list</h3>
      {pokemonMoves.map(move => (
        <span className='pokemon-moves__move' key={move}>
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
