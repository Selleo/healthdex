import padStat from 'lodash/padStart';
import first from 'lodash/first';
import get from 'lodash/get';
import { getPokemonByName } from '../pokemons/selectors';

export const hasSpecies = (state, name) => state.pokemonSpecies.byName.hasOwnProperty(name);

export const getSpeciesByName = (state, speciesName) => state.pokemonSpecies.byName[speciesName];

export const getSpeciesByPokemon = (state, name) => {
  const pokemon = getPokemonByName(state, name);
  return getSpeciesByName(state, pokemon.species);
};

export const getPokemonNationalNumber = (state, name) => {
  const { nationalPokedexNumber } = getSpeciesByPokemon(state, name);

  if (!nationalPokedexNumber) {
    return null;
  }

  return padStat(nationalPokedexNumber, 3, 0);
}

export const getPokemonTranslatedGenus = (state, name) => getSpeciesByPokemon(state, name).translatedGenus;

export const getPokemonTranslatedName = (state, name) => {
  const pokemon = getPokemonByName(state, name);
  const species = getSpeciesByPokemon(state, name);

  return pokemon.translatedName || species.translatedName;
};

export const getPokemonEvolutionChain = (state, name) => getSpeciesByPokemon(state, name).evolutionChainId;

export const getSpeciesVariaties = (state, speciesName) => get(getSpeciesByName(state, speciesName), 'varieties', []);

export const getDefaultSpeciesPokemon = (state, speciesName ) => first(getSpeciesVariaties(state, speciesName));
