import React from 'react'

export function PokemonTypeButton(props) {
  const { type, label, isActive, onClick } = props;

  return (
    <button
      type="button"
      style={{ borderColor: isActive ? 'red' : undefined }}
      onClick={() => onClick(type)}
    >
      {label}
    </button>
  )
}
