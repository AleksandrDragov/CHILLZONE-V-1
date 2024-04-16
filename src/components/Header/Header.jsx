import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderNavigation,
  HeaderNavLinks,
  Logo,
  ProfileContainer,
  Profile,
  ProfileSpan,
} from './Styled';

function ProfileHandlerModal(e) {}

export default function Header() {
  return (
    <HeaderContainer>
      <Logo to="/">CZ</Logo>
      <HeaderNavigation>
        <HeaderNavLinks to="/">Home</HeaderNavLinks>
        <HeaderNavLinks to="/menu">Menu</HeaderNavLinks>
        <HeaderNavLinks to="/bonuses">Bonuses</HeaderNavLinks>
      </HeaderNavigation>
      <ProfileContainer>
        <a href="#" onClick={() => ProfileHandlerModal()}>
          <Profile>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
              alt=""
              width={'40px'}
              height={'40px'}
            />
          </Profile>
          <ProfileSpan>Profile</ProfileSpan>
        </a>
      </ProfileContainer>
    </HeaderContainer>
  );
}
