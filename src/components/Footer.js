import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #0c0c0c;
  color: #555;
  padding: 2rem;
  text-align: center;
  margin-top: auto;
  font-family: 'Courier New', Courier, monospace;
  border-top: 1px solid #333;
  text-transform: uppercase;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2025 Smoke & Vape Shop. All Rights Reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;