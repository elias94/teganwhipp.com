import styled from '@emotion/styled'

export const Container = styled.nav`
  position: absolute;
  top: 35px;
  left: 50%;
`

export const MenuToggle = styled.div`
  overflow: hidden;
  position: relative;
  width: 50px;
  height: 50px;
  transform: translateX(-50%) rotate(0deg);
  transition: all .5s ease;
  cursor: pointer;
  user-select: none;

  background: linear-gradient(135deg, #3C0576 30%, rgb(176, 106, 179) 100%);
  box-shadow: 0 22px 70px 4px rgba(0,0,0,0.56), 0 0 0 1px rgba(0, 0, 0, 0.0);
  border-radius: 25px;

  span:nth-child(1) {
    top: 17px;
    left: 13px;
  }

  span:nth-child(2), span:nth-child(3) {
    top: calc(17px + 8px);
    left: 13px;
  }

  span:nth-child(4) {
    top: calc(17px + 2 * 8px);
    left: 13px;
  }

  &.open {
    width: 100%;
  }

  &.open span:nth-child(1) {
    top: calc(17px + 8px);
    width: 0%;
    left: 10px;
  }

  &.open span:nth-child(2) {
    transform: rotate(45deg);
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg);
  }

  &.open span:nth-child(4) {
    top: calc(17px + 8px);
    width: 0%;
    left: 10px;
  }
`

export const MenuSlice = styled.span`
  display: block;
  position: absolute;
  height: 2px;
  width: 25px;
  background: #FFFFFF;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
`

export const MenuContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  padding: 0 20px;
  padding-left: 60px;

  li {
    padding: 0 10px;
    color: #FFF;

    span:focus {
      outline: none;
    }
  }
`
