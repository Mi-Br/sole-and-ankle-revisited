import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <Icon id='shopping-bag'></Icon>
          <Icon id='search'></Icon>
          <Icon id='menu' onClick={() => setShowMobileMenu(true)}></Icon>
        </MobileNav>
        <Side id="hideMobile"/>
      </MainHeader>
        <MobileMenu
          isOpen={showMobileMenu}
          onDismiss={() => setShowMobileMenu(false)}
        />
    </header>
  );
};


const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};


  @media ${p=>p.theme.tabletAndSmaller} {
    border-top: 4px solid ${COLORS.gray[900]};
    align-items: space-between;
    #hideMobile{
      display: none;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  @media ${p=>p.theme.tabletAndSmaller} {
    display: none;
  }
`;

const MobileNav = styled(Nav)`
margin-left: auto;
margin-right: 0;
display: none;
@media ${p=>p.theme.tabletAndSmaller} {
  display: flex;
}
`

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
