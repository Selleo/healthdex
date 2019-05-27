import React, { memo } from 'react';
import isEmpty from 'lodash/isEmpty'
import { PokemonShortInfoContainer } from './PokemonShortInfo';

export const EvolutionStep = memo(function EvolutionStep(props) {
  const { evolution } = props;
  const { evolution_details, evolves_to, species: { name } } = evolution;
  const isFirstInChain = isEmpty(evolution_details)
  const style = isFirstInChain ? {} : { paddingLeft: 20, borderLeft: '1px solid grey' }

  return (
    <div style={style}>
      <hr />
      {evolution_details.map((detail, index) => (
        <span key={index}>detail {index}</span>
      ))}
      {isFirstInChain || <>{' '}&raquo;{' '}</>}
      <PokemonShortInfoContainer pokemonName={name} />
      {evolves_to.map((nextEvolution) => (
        <EvolutionStep key={nextEvolution.species.name} evolution={nextEvolution} />
      ))}
    </div>
  );
});
