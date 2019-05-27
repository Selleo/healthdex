import React, { useRef } from 'react'
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller'
import { getLoadedPokemonList, getLoadedPokemonListSize, getPokemonListSize, isPokemonListLoading } from '../../store/pokemons/selectors';
import { fetchMissingPokemons } from '../../store/pokemons/operations';
import { PokemonCardContainer } from '../PokemonCard';
import { Loader } from '../Loader';

const limit = 5;

export function PokemonList(props) {
  const {
    isLoading,
    pokemonList,
    loadedPokemonCount,
    totalPokemonCount,
    onLoadMore,
  } = props;

  const containerRef = useRef();

  const hasMore = !isLoading && loadedPokemonCount !== totalPokemonCount;
  const loader = <Loader key={loadedPokemonCount} />;

  if (isLoading) {
    return loader;
  }

  return (
    <div className="pokemon-cards-list" ref={containerRef}>
      <InfiniteScroll
        pageStart={0}
        threshold={400}
        hasMore={hasMore}
        loadMore={() => onLoadMore(loadedPokemonCount, limit)}
        loader={loader}
        useWindow={false}
        getScrollParent={() => containerRef.current}
      >
        {pokemonList.map(name => (
          <PokemonCardContainer key={name} pokemonName={name} />
        ))}
      </InfiniteScroll>
    </div>
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
