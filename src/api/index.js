import { Pokedex } from 'pokeapi-js-wrapper';

export const client = new Pokedex({ cache: true, protocol: 'https' })

export const getPokemonTypesList = async () => {
  const { results } = await client.getTypesList({ limit: -1 });
  return results;
}

export const getPokemonList = async () => {
  const { results } = await client.getPokemonsList({ limit: -1 });
  return results;
}

export const getPokemonListByType = async (type) => {
  const { pokemon } = await client.getTypeByName(type);
  return pokemon.map(pokemonData => pokemonData.pokemon);
}

export const getPokemonByName = async (name) => {
  return await client.getPokemonByName(name);
}

export const getPokemonSpeciesByName = async (name) => {
  return await client.getPokemonSpeciesByName(name);
}
