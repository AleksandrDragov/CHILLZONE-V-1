import styled, { keyframes } from 'styled-components';

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-left: 40px;
  position: relative;
  width: 230px;
  height: 300px;
  margin-top: 30px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 16px;
  position: relative;
  cursor: pointer;

  &:hover {
    box-shadow: -3px 1px 50px rgba(101, 54, 171, 1),
      0px -1px 33px rgba(211, 95, 95, 0.76);
    transform: scale(1.05);
    transition: 300ms linear;
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const GradientBackground = styled.div`
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  animation: ${rotateAnimation} 7s infinite ease-in-out;
  background: linear-gradient(
    90deg,
    rgba(47, 38, 205, 1) 12%,
    rgba(106, 9, 121, 1) 63%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const ShadowOverlay = styled.div`
  content: '';
  border-radius: 16px;
  position: absolute;
  background: #000;
  inset: 5px;
`;

export const Title = styled.h2`
  color: #808080;
  z-index: 1;
`;

export const Logo = styled.img`
  color: #808080;
  z-index: 1;
  width: 50%;
  height: auto;
  border-radius: 50%;
`;

export const Name = styled.p`
  color: #808080;
  z-index: 1;
  font-size: 24px;
`;

export const Price = styled.p`
  color: #808080;
  z-index: 1;
  font-size: 24px;
`;
