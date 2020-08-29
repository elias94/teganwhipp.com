import styled from '@emotion/styled'

export const Container = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;

  &:hover svg {
    fill: rgba(255,255,255,1);
  }

  svg {
    width: 24px;
    fill: rgba(255,255,255,.6);
    transition: fill .4s ease-out;
  }
`
