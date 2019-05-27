import { connect } from 'react-redux'
import { getPokemonNationalNumber } from '../store/pokemonSpecies/selectors';

const mapStateToProps = (state, ownProps) => ({
  pokemonNationalNumber: getPokemonNationalNumber(state, ownProps.pokemonName)
});

export function withPokemonNationalNumber(WrappedComponent) {
  return connect(mapStateToProps)(WrappedComponent);
}
