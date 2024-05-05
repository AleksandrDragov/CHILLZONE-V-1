import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  height: 100px;
  position: sticky;
  top: 0;
  z-index: 999;
  align-items: center;
  justify-content: center;
  padding-left: 120px;
  padding-right: 120px;
  background-color: black;
  border-bottom: 2px solid gray;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 20%;
  @media screen and (max-width: 768px) {
    display: none;
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
  margin-left: 20px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;
export const ProfileButton = styled.button`
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin-left: auto; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Profile = styled.div`
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
export const BurgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  div {
    width: 35px;
    height: 5px;
    background-color: white;
    margin: 6px 0;
    transition: transform 300ms ease-in-out;
  }

  & .open:nth-child(1) {
    transform: translateY(11px) rotate(45deg);
  }

  & .open:nth-child(2) {
    opacity: 0;
  }

  & .open:nth-child(3) {
    transform: translateY(-11px) rotate(-45deg);
  }
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    padding-right: 20px;
  }
`;
export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: black;
  z-index: 998;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  opacity: ${props => (props.isOpen ? '1' : '0')};
  transition: transform 300ms ease-in-out, opacity 700ms ease-in-out;
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
`;

export const HeaderNavLinks = styled(NavLink)`
  font-size: 24px;
  color: white;
  display: block;
  padding: 10px 0;
  &:hover {
    color: purple;
  }
  &.active {
    color: purple;
  }
`;
