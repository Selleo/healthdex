import React from 'react'
import { connect } from 'react-redux';
import startCase from 'lodash/startCase';
import flowRight from 'lodash/flowRight';
import { getPokemonStats } from '../../store/pokemons/selectors';
import { withPokemonName } from '../../hocs/withPokemonName';

export function PokemonStats(props) {
  const { pokemonStats } = props;

  return (
    <table>
      <tbody>
        {pokemonStats.map(statData => (
          <tr key={statData.stat.name}>
            <td>
              <strong>
                {startCase(statData.stat.name)}
              </strong>
            </td>
            <td>
              {statData.base_stat}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const mapStateToProps = (state, ownProps) => ({
  pokemonStats: getPokemonStats(state, ownProps.pokemonName)
});

export const PokemonStatsContainer = flowRight([
  withPokemonName,
  connect(mapStateToProps),
])(PokemonStats);
