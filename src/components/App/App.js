import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { PokedexContainer } from '../Pokedex';

export function App() {
  return (
    <Provider store={store}>
      <PokedexContainer />
    </Provider>
  );
}
