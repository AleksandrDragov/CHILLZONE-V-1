import React from 'react';
import Card from '../../components/Сard/Card';
import { MenuContainer } from './Styled';

const Menu = ({ data }) => {
  return (
    <MenuContainer>
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </MenuContainer>
  );
};

export default Menu;
