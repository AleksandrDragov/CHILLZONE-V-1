import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid gray;
  background-color: #000;
  height: 120px;
`;

export const FooterSocial = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const FooterSocialLink = styled(Link)`
  padding-left: 20px;
  font-size: 24px;
  color: white;
  transition: 0.7s;
  &:hover {
    color: purple;
  }
`;
