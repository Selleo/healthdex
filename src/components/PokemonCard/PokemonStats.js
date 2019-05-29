import React from 'react'
import { connect } from 'react-redux';
import startCase from 'lodash/startCase';
import flowRight from 'lodash/flowRight';
import { getPokemonStats } from '../../store/pokemons/selectors';
import { withPokemonName } from '../../hocs/withPokemonName';

export function PokemonStats(props) {
  const { pokemonStats } = props;
  const graphClassName = (width) => {
    let className = 'pokemon-card__graph';
    const barColor = 20;
    if(width <= barColor) {
      className += ' -low'
    } else if (width > barColor && width <= barColor * 2) {
      className += ' -medium'
    } else if (width > barColor * 2 && width <= barColor * 3) {
      className += ' -high'
    } else if (width > barColor * 3 && width <= barColor * 4) {
      className += ' -epic'
    }
   return className;
  }

  return (
    <table className='pokemon-card__table' cellSpacing='0'>
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
              <div className='pokemon-card__graph-wrapper'>
                <div className={graphClassName(statData.base_stat / 255 * 100)} style={{width: statData.base_stat / 255 * 100 + '%'}}></div>
              </div>
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
