import styled from '@emotion/styled'

export const Title = styled.h1`
  font-family: 'Lobster', serif;
  font-size: 32px;
  font-size: 3.13333vw;
  line-height: 1em;
  font-weight: 400;
  margin-bottom: .5em;
  text-align: center;
  color: #FFFFFF;
  text-shadow: 10px 10px 25px #333333;
  user-select: none;
  display: block;

  @media only screen and (min-width: 1024px) {
    font-size: 72px;
    font-size: 4.2vw;
    line-height: 1em;
    max-width: 75vw;
    margin-bottom: .1em;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 96px;
    font-size: 6.4vw;
    margin-bottom: .2em;
  }
`

export const Subtitle = styled.p`
  font-family: 'IM Fell English', serif;
  font-size: 22px;
  font-size: 1.46667vw;
  line-height: 1em;
  line-height: 1.2em;
  font-style: italic;
  margin-top: .5em;
  margin-bottom: .5em;
  text-align: center;
  color: #FFFFFF;
  user-select: none;

  @media only screen and (min-width: 1400px) {
    font-size: 26px;
    margin-bottom: .5em;
  }

  @media only screen and (min-width: 1200px) {
    line-height: 1.3em;
    margin-bottom: .5em;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 24px;
    font-size: 1.8vw;
    line-height: 1em;
    line-height: 1.2em;
    margin-bottom: .4em;
  }
`
