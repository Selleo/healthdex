import React, { memo, useState } from 'react'
import { connect } from 'react-redux';
import { PokemonNameContext } from '../../contexts/PokemonNameContext';
import { isPokemonLoading, hasPokemon } from '../../store/pokemons/selectors';
import { Loader } from '../Loader';
import { PokemonStatsContainer } from './PokemonStats';
import { PokemonAvatarContainer } from '../PokemonAvatar';
import { PokemonNameContainer } from './PokemonName';
import { PokemonGenusContainer } from './PokemonGenus';
import { PokemonTypesContainer } from './PokemonTypes';
import { PokemonNationalNumberContainer } from './PokemonNationalNumber';
import { PokemonEvolutionContainer } from '../PokemonEvolution';

export const PokemonCard = memo(function PokemonCard(props) {
  const { pokemonName, pokemonExists, isLoading } = props;
  const [details, setDetails] = useState(false);

  if (isLoading || !pokemonExists) {
    return (
      <div className='pokemon-card'>
        <Loader />
      </div>
    )
  }

  return (
    <PokemonNameContext.Provider value={pokemonName}>
      <div className='pokemon-card'>
        <div className='pokemon-card__img'>
          <PokemonAvatarContainer />
        </div>
        <div className='pokemon-card__info'>
          <PokemonNationalNumberContainer />
          <PokemonNameContainer />
          <PokemonGenusContainer />
          <PokemonTypesContainer />
        </div>
        <PokemonStatsContainer />
        <div>
          <button type="button" onClick={() => setDetails(status => !status)}>
            Show pokemon details
          </button>
        </div>

        {details && (
          <PokemonEvolutionContainer />
        )}
      </div>
    </PokemonNameContext.Provider>
  )
});

const mapStateToProps = (state, ownProps) => ({
  isLoading: isPokemonLoading(state, ownProps.pokemonName),
  pokemonExists: hasPokemon(state, ownProps.pokemonName),
})

export const PokemonCardContainer = connect(mapStateToProps)(PokemonCard);
