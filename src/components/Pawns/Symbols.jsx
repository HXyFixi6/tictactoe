import React from 'react';

export const Cross = ({ color = '#333' }) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <line x1="20" y1="20" x2="80" y2="80"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round" />
      <line x1="80" y1="20" x2="20" y2="80"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round" />
    </svg>
);

export const Circle = ({ color = '#333' }) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <circle cx="50" cy="50" r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="12" />
    </svg>
);

export const PlayerSymbol = ({ symbol }) => {
  if (symbol === 'X') return <Cross />;
  if (symbol === 'O') return <Circle />;
  return null;
};