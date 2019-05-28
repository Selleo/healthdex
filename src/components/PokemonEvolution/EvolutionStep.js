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
        {isFirstInChain || <>{' '}&raquo;{' '}</>}
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
