import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding-left: 120px;
  padding-right: 120px;
  position: relative;
  background-color: black;
  border-bottom: 2px solid gray;
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 76px;
`;

export const HeaderNavLinks = styled(NavLink)`
  font-size: 24px;
  color: white;
  &.active {
    transition: 0.7s;
    color: purple;
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
  font-family: sans-serif;
  font-size: 30px;
  color: black;
  margin-right: auto;
  margin-left: 50px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;

export const Profile = styled.div`
  margin-right: 50px;
  background-color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileSpan = styled.span`
  color: white;
  font-size: 24px;
`;
