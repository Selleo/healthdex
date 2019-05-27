import React, { memo } from 'react'
import { connect } from 'react-redux';
import { PokemonNameContext } from '../../contexts/PokemonNameContext';
import { getIsPokemonLoading } from '../../store/pokemons/selectors';
import { PokemonStatsContainer } from './PokemonStats';
import { PokemonAvatarContainer } from './PokemonAvatar';
import { PokemonNameContainer } from './PokemonName';
import { PokemonGenusContainer } from './PokemonGenus';
import { PokemonNationalNumberContainer } from './PokemonNationalNumber';
import { Loader } from '../Loader';

export const PokemonCard = memo(function PokemonCard(props) {
  const { pokemonName, isLoading } = props;

  if (isLoading) {
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
        </div>
        <PokemonStatsContainer />
      </div>
    </PokemonNameContext.Provider>
  )
});

const mapStateToProps = (state, ownProps) => ({
  isLoading: getIsPokemonLoading(state, ownProps.pokemonName)
})

export const PokemonCardContainer = connect(mapStateToProps)(PokemonCard);
