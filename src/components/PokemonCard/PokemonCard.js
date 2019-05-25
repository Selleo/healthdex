import React from 'react'
import { connect } from "react-redux";
import { getPokemonAvatar, getPokemonStats, getPokemonName } from "../../store/pokemons/selectors";
import { PokemonStats } from './PokemonStats';

export function PokemonCard(props) {
  const {
    translatedPokemonName,
    pokemonAvatar,
    pokemonStats,
  } = props;

  return (
    <div>
      <hr />
      {pokemonAvatar && <img src={pokemonAvatar} alt="" />}
      <br/>
      Name: {translatedPokemonName}
      <br />
      <PokemonStats pokemonStats={pokemonStats} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { pokemonName: name } = ownProps;

  return {
    translatedPokemonName: getPokemonName(state, name),
    pokemonAvatar: getPokemonAvatar(state, name),
    pokemonStats: getPokemonStats(state, name),
  }
}

export const PokemonCardContainer = connect(mapStateToProps)(PokemonCard);
