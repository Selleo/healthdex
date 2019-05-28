import { connect } from 'react-redux';
import { getPokemonTypes } from '../store/pokemons/selectors';

const mapStateToProps = (state, ownProps) => ({
  pokemonTypes: getPokemonTypes(state, ownProps.pokemonName)
})

export function withPokemonTypes(WrappedComponent) {
  return connect(mapStateToProps)(WrappedComponent);
}
