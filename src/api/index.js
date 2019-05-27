import { Pokedex } from 'pokeapi-js-wrapper';

export const client = new Pokedex({ cache: true, protocol: 'https' })

export const getPokemonTypesList = async () => {
  const { results } = await client.getTypesList({ limit: -1 });
  return results;
}

export const getPokemonList = async () => {
  const { results } = await client.getPokemonSpeciesList({ limit: -1 });
  return results;
}

export const getPokemonListByType = async (pokemonType) => {
  const { pokemon } = await client.getTypeByName(pokemonType);
  return pokemon.map(pokemonData => pokemonData.pokemon);
}

export const getPokemonByName = async (pokemonName) => {
  return await client.getPokemonByName(pokemonName);
}

export const getPokemonSpeciesByName = async (speciesName) => {
  return await client.getPokemonSpeciesByName(speciesName);
}

export const getPokemonFormByName = async (formName) => {
  return await client.getPokemonFormByName(formName);
}

export const getPokemonEvolutionById = async (evolutionId) => {
  const { chain } = await client.getEvolutionChainById(evolutionId);
  return chain;
}
