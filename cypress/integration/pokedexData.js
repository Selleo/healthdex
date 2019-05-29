/// <reference types="Cypress" />

import typesListResponse from '../fixtures/typesList';
import normalTypeListResponse from '../fixtures/typeNormal';
import pokemonListResponse from '../fixtures/pokemonList';
import pokemonEeveeResponse from '../fixtures/pokemonEevee';
import pokemonSpeciesEeveeResponse from '../fixtures/pokemonSpeciesEevee';
import evolutionChainEeveeResponse from '../fixtures/evolutionChainEevee';
import pokemonJolteonResponse from '../fixtures/pokemonJolteon';
import pokemonVaporeonResponse from '../fixtures/pokemonVaporeon';
import pokemonSpeciesJolteonResponse from '../fixtures/pokemonSpeciesJolteon';
import pokemonSpeciesVaporeonResponse from '../fixtures/pokemonSpeciesVaporeon';

describe('Pokedex', () => {
  beforeEach(() => {
    indexedDB.deleteDatabase('pokeapi-js-wrapper');

    cy.server();

    cy.route({
      method: 'GET',
      url: '/api/v2/type/?limit=10000&offset=0',
      response: typesListResponse,
    }).as('typesList');

    cy.route({
      method: 'GET',
      url: '/api/v2/pokemon/?limit=10000&offset=0',
      response: pokemonListResponse,
    }).as('pokemonList');

    cy.route({
      method: 'GET',
      url: '/api/v2/type/normal/',
      response: normalTypeListResponse,
    }).as('typeNormal');

    cy.route({
      method: 'GET',
      url: '/api/v2/pokemon/eevee/',
      response: pokemonEeveeResponse,
    }).as('pokemonEevee');

    cy.route({
      method: 'GET',
      url: '/api/v2/pokemon-species/eevee/',
      response: pokemonSpeciesEeveeResponse,
    }).as('pokemonSpeciesEevee')

    cy.route({
      method: 'GET',
      url: '/api/v2/evolution-chain/67',
      response: evolutionChainEeveeResponse,
    }).as('evolutionChain');

    cy.route({
      method: 'GET',
      url: '/api/v2/pokemon/jolteon/',
      response: pokemonJolteonResponse,
    }).as('pokemonJolteon');

    cy.route({
      method: 'GET',
      url: '/api/v2/pokemon-species/jolteon/',
      response: pokemonSpeciesJolteonResponse,
    }).as('pokemonSpeciesJolteon');

    cy.route({
      method: 'GET',
      url: '/api/v2/pokemon/vaporeon/',
      response: pokemonVaporeonResponse,
    }).as('pokemonVaporeon');


    cy.route({
      method: 'GET',
      url: '/api/v2/pokemon-species/vaporeon/',
      response: pokemonSpeciesVaporeonResponse,
    }).as('pokemonSpeciesVaporeon');

    cy.visit('/');
  })

  it('should fetch available pokemon types', () => {
    cy.wait('@typesList');

    cy.get('.pokemon-filter').find('.btn.-active').contains('All');
    cy.get('.pokemon-filter').find('.btn.-normal').contains('Normal');
  })

  it('should fetch initial pokemon list', () => {
    cy.wait('@pokemonList')
    cy.wait('@pokemonEevee');
    cy.wait('@pokemonSpeciesEevee');

    cy.get('.pokemon-card').contains('Eevee');
  });

  it('should fetch pokemons from normal type', () => {
    cy.get('.btn.-normal').click();
    cy.wait('@typeNormal');
    cy.wait('@pokemonEevee');
    cy.wait('@pokemonSpeciesEevee');

    cy.get('.pokemon-filter').find('.btn.-active').contains('Normal');
    cy.get('.pokemon-card').contains('Eevee');
  });

  it('should show pokemon details', () => {
    cy.wait('@pokemonEevee');
    cy.wait('@pokemonSpeciesEevee');

    cy.contains('Show details').click();

    cy.wait('@pokemonJolteon');
    cy.wait('@pokemonVaporeon');

    cy.contains('Vaporeon');
    cy.contains('Jolteon');

    cy.contains('Hide details').click();
  });
});
