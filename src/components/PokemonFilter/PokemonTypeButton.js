import React from 'react';
import cn from 'classnames';

export function PokemonTypeButton(props) {
  const { type, label, isActive, onClick } = props;

  const className = cn('btn', {
    [`-${type}`]: type,
    '-default': !isActive,
    '-primary': isActive,
  });

  return (
    <button
      className={className}
      type='button'
      onClick={() => onClick(type)}
    >
      {label}
    </button>
  )
}
