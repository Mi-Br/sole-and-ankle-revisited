/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
   <Overlay isOpen={isOpen}>
      <OverlayContent>
        <CloseButton onClick={onDismiss}>
          <Icon id='close'></Icon>
        </CloseButton>
        <ModalNav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </ModalNav>
        <FooterNav>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </FooterNav>
      </OverlayContent>
   </Overlay>
  );
};



const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 12px;
  right:12px;
  padding: 16px;
  outline: 1px solid red;
`

const Overlay = styled(DialogOverlay)`
  position: fixed;
  right: 0;
  top: 3px;
  bottom: 0;
  left: 0;
  width: 100%;
  /* padding: 32px; */
  background-color: rgba(96, 100, 108, 0.80);;
`
 const OverlayContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 300px;
  margin-left: auto;
  padding: 32px;
  background-color: white;

  ${UnstyledButton}{
    align-self: flex-end;
  }


 `




const ModalNav = styled.nav`
display: flex;
flex-direction: column;
gap: 22px;

a {
  text-decoration: none;
  list-style: none;
  color: inherit;
  text-transform: uppercase;
  color: ${COLORS.gray[900]};
  font-size: 18px;;
  font-weight: 600;
  &:nth-child(1) {
    color: ${COLORS.secondary};
  }
}
`

const FooterNav = styled(ModalNav)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-size: calc(14px / 16px * 1rem);
  font-weight: 500;
  a{
  color: ${COLORS.gray[700]};

  &:nth-child(1) {
  color: unset;
  color: ${COLORS.gray[700]};
}
  }
`


export default MobileMenu;
