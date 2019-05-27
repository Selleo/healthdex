import React, { useCallback } from 'react'
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller'
import { getLoadedPokemonList, getLoadedPokemonListSize, getPokemonListSize, isPokemonListLoading } from '../../store/pokemons/selectors';
import { fetchMissingPokemons } from '../../store/pokemons/operations';
import { PokemonCardContainer } from '../PokemonCard';

const limit = 10;

export function PokemonList(props) {
  const {
    isLoading,
    pokemonList,
    loadedPokemonCount,
    totalPokemonCount,
    onLoadMore,
  } = props;

  const hasMore = !isLoading && loadedPokemonCount !== totalPokemonCount;

  const handleLoadMore = useCallback(() => onLoadMore(loadedPokemonCount, limit), [onLoadMore, loadedPokemonCount]);

  const loader = <div key={loadedPokemonCount} className='pokeball' />;

  if (isLoading) {
    return loader;
  }

  return (
    <InfiniteScroll
      className='pokemon-cards-list'
      pageStart={0}
      threshold={250}
      hasMore={hasMore}
      loadMore={handleLoadMore}
      loader={loader}
    >
      {pokemonList.map(name => (
        <PokemonCardContainer key={name} pokemonName={name} />
      ))}
    </InfiniteScroll>
  )
}

const mapStateToProps = (state) => ({
  isLoading: isPokemonListLoading(state),
  pokemonList: getLoadedPokemonList(state),
  loadedPokemonCount: getLoadedPokemonListSize(state),
  totalPokemonCount: getPokemonListSize(state),
})

const mapDispatchToProps = {
  onLoadMore: fetchMissingPokemons,
}

export const PokemonListContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonList);
