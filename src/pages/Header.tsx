import React from 'react';
import * as s from '../styles/HeaderStyle';

const Header = () => {
  return (
    <s.Navigation>
      <s.Title>HANWON JANG’s  WEB PORTFOLIO</s.Title>
      <s.Menu>
        <s.MenuItemContainer>
          <s.MenuItems>HOME</s.MenuItems>
        </s.MenuItemContainer>
        <s.MenuItemContainer>
          <s.MenuItems>ABOUT ME</s.MenuItems>
        </s.MenuItemContainer>
        <s.MenuItemContainer>
          <s.MenuItems>PROJECTS</s.MenuItems>
        </s.MenuItemContainer>
      </s.Menu>
    </s.Navigation>
  );
};

export default Header;