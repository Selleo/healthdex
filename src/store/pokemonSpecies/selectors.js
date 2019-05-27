import padStat from 'lodash/padStart'
import { getPokemonByName } from '../pokemons/selectors';


export const hasSpecies = (state, name) => state.pokemonSpecies.byName.hasOwnProperty(name);

export const getSpeciesByPokemon = (state, pokemonName) => {
  const pokemon = getPokemonByName(state, pokemonName);
  return state.pokemonSpecies.byName[pokemon.species];
};

export const getPokemonNationalNumber = (state, name) => {
  const { nationalPokedexNumber } = getSpeciesByPokemon(state, name);

  if (!nationalPokedexNumber) {
    return null;
  }

  return padStat(nationalPokedexNumber, 3, 0);
}

export const getPokemonTranslatedGenus = (state, name) => getSpeciesByPokemon(state, name).translatedGenus;

export const getPokemonTranslatedName = (state, name) => getSpeciesByPokemon(state, name).translatedName;