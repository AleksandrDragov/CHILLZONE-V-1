import React from 'react';
import { useState } from 'react';
import {
  HeaderContainer,
  HeaderNavigation,
  HeaderNavLinks,
  Logo,
  ProfileContainer,
  Profile,
  ProfileSpan,
  ProfileButton,
  BurgerMenu,
  BurgerIcon,
} from './Styled';
import Modal from 'components/Modal/Modal';
function ProfileHandlerModal(e) {}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const ProfileHandlerModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <HeaderContainer>
      <Logo to="/">CZ</Logo>
      <HeaderNavigation>
        <HeaderNavLinks to="/">Home</HeaderNavLinks>
        <HeaderNavLinks to="/menu">Menu</HeaderNavLinks>
        <HeaderNavLinks to="/bonuses">Bonuses</HeaderNavLinks>
      </HeaderNavigation>
      <ProfileContainer>
        <ProfileButton onClick={() => ProfileHandlerModal()}>
          <Profile>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
              width={'40px'}
              height={'40px'}
            />
          </Profile>
          <ProfileSpan>Profile</ProfileSpan>
        </ProfileButton>
      </ProfileContainer>
      <BurgerIcon onClick={toggleMenu}>
        <div className={isOpen ? 'open' : ''}></div>
        <div className={isOpen ? 'open' : ''}></div>
        <div className={isOpen ? 'open' : ''}></div>
      </BurgerIcon>
      <BurgerMenu isOpen={isOpen}>
        <HeaderNavLinks to="/" onClick={closeMenu}>
          Home
        </HeaderNavLinks>
        <HeaderNavLinks to="/menu" onClick={closeMenu}>
          Menu
        </HeaderNavLinks>
        <HeaderNavLinks to="/bonuses" onClick={closeMenu}>
          Bonuses
        </HeaderNavLinks>
      </BurgerMenu>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {
            <form action="">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="phone" placeholder="Phone" minLength={9} />
              <input type="password" placeholder="Password" />
              <br />
              <button type="submit">Login</button>
              <button type="submit">Register</button>
            </form>
          }
        </Modal>
      )}
    </HeaderContainer>
  );
}
