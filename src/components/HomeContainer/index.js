import React from 'react'

import { Container } from './styles';

export default function HomeContainer({ children }) {
  return (
    <Container>
      { children }
    </Container>
  );
}
