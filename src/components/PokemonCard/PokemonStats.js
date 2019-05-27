import React from 'react'
import { connect } from 'react-redux';
import startCase from 'lodash/startCase';
import flowRight from 'lodash/flowRight';
import { getPokemonStats } from '../../store/pokemons/selectors';
import { withPokemonName } from '../../hocs/withPokemonName';

export function PokemonStats(props) {
  const { pokemonStats } = props;

  return (
    <table className='table' cellSpacing='0'>
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
            <td>
              <meter value={statData.base_stat} low="33" high="67" max="100"></meter>
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
