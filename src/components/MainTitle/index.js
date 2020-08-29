import React, { Fragment } from 'react'

import { Title, Subtitle } from './styles';

export default function MainTitle({ title, subtitle }) {
  return (
    <Fragment>
      <Title>{ title }</Title>
      <Subtitle>{ subtitle }</Subtitle>
    </Fragment>
  );
}
