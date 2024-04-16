import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer, FooterSocial, FooterSocialLink } from './Styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSocial>
        <FooterSocialLink>instagram</FooterSocialLink>
        <FooterSocialLink>facebook</FooterSocialLink>
        <FooterSocialLink>telegram</FooterSocialLink>
      </FooterSocial>
      <div>
        <p style={{ color: 'white' }}>@2024</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
