import React from 'react'

import { Container, Title, Content } from './styles';

export default function AboutContent({ title, content }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
}
