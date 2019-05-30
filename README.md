# Pokedex App

App demo page: https://selleo.github.io/healthdex/

## Project setup

Requirements:

- Node v12 (Other versions might work as well but app was developed with v12)
- Yarn

If you are using `nvm` you can lock your node version using

```bash
$ nvm use
```

This will load node version from `.nvmrc` file.

After that you can simply install packages by running

```bash
$ yarn
```

### Starting project

All you have to do to run this application is to run following command in your terminal:

```bash
$ yarn start
```

### Running tests

If your project is running, you can start cypress integration tests by executing

```bash
$ yarn cypress:open
```

This will open cypress application on your computer, which will allow you to select and execute integration test suite.

### Deployments

If you want to deploy this app on your own it is really simple. Just follow steps below.

1. Fork this repository on github (or clone this repo to your own repository).
2. Pull repository to your local machine
2. Open `package.json` and change `homepage` entry to `https://{username}.github.io/{repoName}`
2. Run `yarn deploy` command. Note: if you didn't install dependencies also run `yarn install` previously.
2. Make sure you have enabled github pages in your repository settings

For more detailed informations please also check this URL:
https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom

## Project overview

This app is made in `react` with `redux` store.

At the initial load we fetch list of all possible pokemons and all pokemon types to reduce the number of API requests.

Because requests are cached (thanks to `pokeapi-js-wrapper`), we can fetch list of all pokemons for a given type the same way
we are doing it for all pokemon list.

Unfortunately, to fetch all the required pokemon data we need at least **two** requests (for some pokemons, to properly fetch the pokemon name, we need **three**; all of these are cached as well).

Revealing pokemon details requires fetching **pokemon evolution**, evolution **species** and **default pokemon** for each evolution step.

## Directory structure

#### `cypress/fixtures/`

Contains mocked responses from pokeapi.co - because of that we can safely test our app integrity even if for some reason the API is down.

#### `cypress/integration/`

Integration tests are stored in this directory

#### `src/api/`

This directory contains all api-related stuff. This mostly wraps `pokeapi-js-wrapper` into utility functions.

#### `src/components/`

All react components are stored in this directory. Major components are divided in their own directories.
If a component is not very complex or is only used within one component - it is stored in its parent component directory.

#### `src/contexts/`

Directory for storing react contexts

#### `src/hocs/`

Here every higher order component functions are stored. These are mostly helpers for reusing `react-redux` connectors.

#### `src/hooks/`

React hooks are stored in this directory.

#### `src/store/`

This directory contains modules and utilities for `redux` store.

#### `stc/store/{pokemons,pokemonSpecies}/`

Contains modules for redux sub-stores for pokemon and pokemon species.

Each directory contains **reducer**, **selectors** ,**action creators** and **operations** - which are basically complex action creators (like `redux-thunk` thunks for example).

#### `src/stylesheets/`

Contains application stylesheets.
