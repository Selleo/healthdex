import { useState, useEffect } from 'react';
import * as api from '../api';

export function usePokemonTypes() {
  const [types, setTypes] = useState([]);

  const handler = () => {
    api.getPokemonTypesList().then((typesList) => {
      const typeNames = typesList.map((typeData) => typeData.name);
      setTypes(typeNames);
    });
  }

  useEffect(handler, [])

  return types;
}
