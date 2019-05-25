import React from 'react'
import startCase from 'lodash/startCase'

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
