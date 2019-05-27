import { connect } from 'react-redux'
import { getPokemonAvatar } from '../store/pokemons/selectors';

const mapStateToProps = (state, ownProps) => ({
  pokemonAvatar: getPokemonAvatar(state, ownProps.pokemonName)
});

export function withPokemonAvatar(WrappedComponent) {
  return connect(mapStateToProps)(WrappedComponent);
}
