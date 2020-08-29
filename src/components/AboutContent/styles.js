import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  margin: 20px;
  padding: 0 90px;
  overflow-y: scroll;
`

export const Title = styled.h1`
  font-family: 'Lobster', serif;
  font-size: 32px;
  font-size: 2.13333vw;
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
    font-size: 3.8vw;
    line-height: 1em;
    max-width: 75vw;
    margin-bottom: .1em;
  }

  @media only screen and (min-width: 1200px) {
    font-size: 96px;
    font-size: 5.4vw;
    margin-bottom: .2em;
  }
`

export const Content = styled.p`
  font-size: 22px;
  font-size: 1.46667vw;
  line-height: 1em;
  line-height: 1.4em;
  margin-top: 1.5em;
  margin-bottom: .5em;
  text-align: left;
  color: #FFFFFF;
  user-select: none;
  white-space: pre-line;

  @media only screen and (min-width: 1024px) {
    font-size: 1em;
    line-height: 1em;
    line-height: 1.2em;
    margin-bottom: .4em;
  }

  @media only screen and (min-width: 1200px) {
    line-height: 1.4em;
    margin-bottom: .5em;
  }

  @media only screen and (min-width: 1400px) {
    font-size: 1.2em;
    margin-bottom: .5em;
  }
`
