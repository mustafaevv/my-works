import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1f1f1f;
  color: #fff;
  padding: 50px 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterColumn = styled.div`
  flex: 1;
  margin-right: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-basis: 50%;
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const FooterLink = styled.a`
  display: block;
  color: #fff;
  margin-bottom: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Explore Nissan</FooterTitle>
          <FooterLink href="#">About Nissan</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Newsroom</FooterLink>
          <FooterLink href="#">Corporate Social Responsibility</FooterLink>
          <FooterLink href="#">Experience Nissan</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Ownership</FooterTitle>
          <FooterLink href="#">Owner Portal</FooterLink>
          <FooterLink href="#">NissanConnect</FooterLink>
          <FooterLink href="#">Manuals & Guides</FooterLink>
          <FooterLink href="#">Warranty</FooterLink>
          <FooterLink href="#">Recalls</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Shop</FooterTitle>
          <FooterLink href="#">Build & Price</FooterLink>
          <FooterLink href="#">Search Inventory</FooterLink>
          <FooterLink href="#">Estimate Payments</FooterLink>
          <FooterLink href="#">Offers & Incentives</FooterLink>
          <FooterLink href="#">Request a Quote</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Connect</FooterTitle>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">Request a Brochure</FooterLink>
          <FooterLink href="#">FAQs</FooterLink>
          <FooterLink href="#">Nissan USA Official Site</FooterLink>
          <FooterLink href="#">Nissan Canada Official Site</FooterLink>
        </FooterColumn>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
