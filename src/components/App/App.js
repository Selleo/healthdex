import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Pokedex } from '../Pokedex';

export function App() {
  return (
    <Provider store={store}>
      <Pokedex />
    </Provider>
  );
}
