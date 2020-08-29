import React from 'react'

import { Button } from './styles';

export default function ActionButton({ text, onClick }) {
  return (
    <Button onClick={onClick} data-hover>
      <span>{text}</span>
    </Button>
  );
}
