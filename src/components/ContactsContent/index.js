import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

import { Container, Title, Content, Space } from './styles';

export default function AboutContent({ title, content }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        hello@teganwhipp.com
        <Space />
        <a href="https://www.instagram.com/teganwhipp/" data-hover><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
        <a href="https://www.facebook.com/tegan.whipp" data-hover><FontAwesomeIcon icon={faFacebookF} size="lg" /></a>
      </Content>
    </Container>
  );
}
