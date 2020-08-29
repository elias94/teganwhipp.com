import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: rgba(0, 0, 0, .8);
  width: 100%;
  height: 100%;
  overflow: hidden;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Box = styled.div`
  background: linear-gradient(135deg, #3C0576 30%, rgb(176, 106, 179) 100%);
  box-shadow: 0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.0);

  width: 80vw;
  height: 47.5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 25px;

  transform-style: preserve-3d;

  & > h1, & > p, & > button {
    position: relative;
    display: block;
    transform: translateZ(75px);
  }

  @media only screen and (min-width: 1400px) {
    width: 40vw;
  }

  @media only screen and (min-width: 1200px) {
    width: 55vw;
  }

  @media only screen and (min-width: 1024px) {
    width: 55vw;
  }
`

export const CloseButton = styled.div`
  position: absolute;
  top: 10%;
  right: 6%;
  width: 20px;
  height: 20px;

  span:nth-of-type(1) {
    transform: rotate(45deg);
  }

  span:nth-of-type(2) {
    transform: rotate(-45deg);
  }

  &:hover span {
    opacity: 1;
  }
`

export const CloseBar = styled.span`
  display: block;
  position: absolute;
  height: 2px;
  width: 25px;
  background: #FFFFFF;
  border-radius: 2px;
  opacity: .6;
  left: 0;
  transform: rotate(0deg);
  transition: opacity .3s ease;
`
