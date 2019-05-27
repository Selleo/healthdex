import { connect } from 'react-redux';
import { getPokemonTranslatedName } from '../store/pokemonSpecies/selectors';

const mapStateToProps = (state, ownProps) => ({
  translatedPokemonName: getPokemonTranslatedName(state, ownProps.pokemonName)
})

export function withTranslatedPokemonName(WrappedComponent) {
  return connect(mapStateToProps)(WrappedComponent);
}
