import React from 'react'

export function PokemonTypeButton(props) {
  const { type, label, isActive, onClick } = props;

  return (
    <button
      className={'btn ' + (isActive ? '-primary' : '-outline')}
      type="button"
      onClick={() => onClick(type)}
    >
      {label}
    </button>
  )
}
