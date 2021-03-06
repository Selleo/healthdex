import React, { memo, useState } from 'react'
import { connect } from 'react-redux';
import { PokemonNameContext } from '../../contexts/PokemonNameContext';
import { isPokemonLoading, hasPokemon } from '../../store/pokemons/selectors';
import { Loader } from '../Loader';
import { PokemonStatsContainer } from './PokemonStats';
import { PokemonAvatarContainer } from './PokemonAvatar';
import { PokemonNameContainer } from './PokemonName';
import { PokemonGenusContainer } from './PokemonGenus';
import { PokemonTypesContainer } from './PokemonTypes';
import { PokemonNationalNumberContainer } from './PokemonNationalNumber';
import { PokemonEvolutionContainer } from '../PokemonEvolution';
import { PokemonAbilitiesContainer } from './PokemonAbilities';
import { PokemonHeightContainer } from './PokemonHeight';
import { PokemonWeightContainer } from './PokemonWeight';
import { PokemonMovesContainer } from './PokemonMoves';

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
        <div className='pokemon-card__info'>
          <div className='pokemon-card__header'>
            <PokemonAvatarContainer />
            <PokemonNationalNumberContainer />
          </div>
          <PokemonNameContainer />
          <PokemonGenusContainer />
          <PokemonTypesContainer />
          <PokemonHeightContainer />
          <PokemonWeightContainer />
          <PokemonAbilitiesContainer />
        </div>
        <PokemonStatsContainer />

        <button className="btn -primary" type="button" onClick={() => setDetails(status => !status)}>
          {details ? 'Hide' : 'Show'} details
        </button>

        {details && (
          <div className='pokemon-card__details'>
            <PokemonEvolutionContainer />
            <PokemonMovesContainer />
          </div>
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
