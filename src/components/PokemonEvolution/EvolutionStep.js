import React, { memo } from 'react';
import isEmpty from 'lodash/isEmpty'
import { PokemonShortInfoContainer } from './PokemonShortInfo';

export const EvolutionStep = memo(function EvolutionStep(props) {
  const { evolution } = props;
  const { evolution_details, evolves_to, species: { name } } = evolution;
  const isFirstInChain = isEmpty(evolution_details)

  return (
    <>
      <div className="evolution">
        {isFirstInChain || <svg className="evolution__arrow" viewBox="0 0 26 13"><path d="M20.854.146a.5.5 0 0 0-.707.707L24.293 5 .5 5a.5.5 0 0 0 0 1h23.793l-4.146 4.145a.5.5 0 0 0 .708.707l5-5a.5.5 0 0 0 0-.707L20.854.146z"/></svg>}
        <PokemonShortInfoContainer speciesName={name} />

        <div className="evolution__group">
          {evolves_to.map((nextEvolution) => (
            <EvolutionStep key={nextEvolution.species.name} evolution={nextEvolution} />
          ))}
        </div>
      </div>
    </>
  );
});
