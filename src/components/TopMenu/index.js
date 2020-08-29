import React, { useState } from 'react'
import onClickOutside from 'react-onclickoutside'

import { Container, MenuToggle, MenuSlice, MenuContainer } from './styles';

function TopMenu({ onClick }) {
  const [isOpen, toggleOpen] = useState(false);

  const toggle = () => toggleOpen(isOpen => !isOpen)

  TopMenu.handleClickOutside = () => toggleOpen(false)

  return (
    <Container>
      <MenuToggle className={isOpen ? 'open' : ''} onClick={toggle}>
        <MenuSlice key="slice1"></MenuSlice>
        <MenuSlice key="slice2"></MenuSlice>
        <MenuSlice key="slice3"></MenuSlice>
        <MenuSlice key="slice4"></MenuSlice>
        <MenuContainer>
          <li><span role="button" data-hover tabIndex={0} onClick={() => onClick('home')}>Home</span></li>
          <li><span role="button" data-hover tabIndex={0} onClick={() => onClick('about')}>About</span></li>
          <li><span role="button" data-hover tabIndex={0} onClick={() => onClick('contact')}>Contacts</span></li>
        </MenuContainer>
      </MenuToggle>
    </Container>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => TopMenu.handleClickOutside
}

export default onClickOutside(TopMenu, clickOutsideConfig)
