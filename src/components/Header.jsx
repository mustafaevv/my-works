import React from "react";
import styled from "styled-components";
import { Container } from "../Layout/Container";
import { Link } from "react-router-dom";

const Block = styled.div`
  padding: 15px 0;
  background: url(https://www.nissanusa.com/content/dam/Nissan/us/homepage/secondary-pfa/nissan-ariya-ev.jpg);
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
`;

const Nav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-size: 34px;
  font-weight: bold;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`;
const NavContainer = styled(Container)``;

const List = styled.ul`
  display: flex;
  list-style: none;
  gap: 3em;
`;

const Links = styled(Link)`
  font-size: 18px;
  color: #000;
  font-weight: 500;
  text-decoration: none;
  text-transform: capitalize;
  padding: 15px 15px 10px;
  font-size: 18px;
  line-height: 25px;
  display: inline-block;

  &:hover {
    color: black;
  }

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    display: block;
    background: #000;
    transition: 0.4s transform;
    transform: scaleX(0);
    transform-origin: left;
    margin-top: 5px;
  }

  &:hover::after,
  &_active::after {
    transform: scaleX(1);
  }
`;

const BlockItem = styled.div`
  margin-top: 100px;
`;
const BlockText = styled.p`
  width: 850px;
  font-size: large;
  margin: 5px;
`;
const BlockButton = styled.button`
  width: 250px;
  height: 60px;
  background-color: black;
  color: white;
  font-size: large;
  margin: 10px;
`;
const BlockTitle = styled.p`
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 8px;
`;

const links = [
  {
    name: "home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Login",
    link: "/login",
  },
];

const Header = () => {
  return (
    <Block>
      <NavContainer>
        <Nav>
          <Logo href="/">
            NISSAN
          </Logo>
          <List>
            {links.map(({ name, link }, index) => (
              <li key={index}>
                <Links to={link}>{name}</Links>
              </li>
            ))}
          </List>
        </Nav>
        <BlockItem>
          <BlockTitle>Designed to Thrill</BlockTitle>
          <BlockText>
            Fierce, yet refined. Elegant, yet exhilarating. In the ARIYA.
          </BlockText>
          <BlockButton>Bulid & Pricem </BlockButton>
        </BlockItem>
      </NavContainer>
    </Block>
  );
};

export default Header;

{
  /* A totally new way to see electric driving</div>
      The All-New 2023 Nissan ARIYA
      
      
       Fierce, yet refined. Elegant, yet
      exhilarating. In the ARIYA, there’s always more to the story than meets
      the eye. */
}
