import React from 'react';
import {
  Container,
  GradientBackground,
  ShadowOverlay,
  Title,
  Logo,
  Name,
  Price,
} from '../../Pages/Menu/Styled';

const Card = ({ title, name, price, logo }) => (
  <Container>
    <Logo src={`${process.env.PUBLIC_URL}/images/${logo}`} alt="Logo" />
    <Title>{title}</Title>
    <Name>{name}</Name>
    <Price>Price: {price} Kč</Price>
    <GradientBackground />
    <ShadowOverlay />
  </Container>
);

export default Card;
