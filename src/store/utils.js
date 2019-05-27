export const matchEnglishLanguage = (nameData) => nameData.language.name === 'en';

export const matchNationalPokedex = (pokedexData) => pokedexData.pokedex.name === 'national';

export const matchPokemonForm = (pokemonName) => (form) => form.name === pokemonName;
