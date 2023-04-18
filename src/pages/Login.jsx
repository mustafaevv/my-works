import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Logo = styled(Link)`
  font-size: 34px;
  font-weight: bold;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #000;
  }
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
  padding: 100px 0;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`;

const Button = styled.button`
  background-color: #c3002f;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const Section = styled.section`
  max-width: 1400px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

const Header = styled.div``;

const Block = styled.div`
  text-align: center;
  margin: 100px 0;

  & h5 {
    color: #000;
    font-size: 30px;
  }
`;

const Txt = styled.p`
  color: #c3002f;
  font-size: 20px;
`;

const TExt = styled.p`
  color: #000;
  font-size: 20px;
`;

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit logic here
  };
  return (
    <>
      <Section>
        <Header>
          <Logo to="/">NISSAN</Logo>
        </Header>
        <Block>
          <Txt>MyNISSAN</Txt>
          <h5> ACCOUNT LOGIN</h5>
          <TExt>
            MyNISSAN is your vehicle's online home. Login to access
            model-specific information designed to make your journey an even
            greater joy.
          </TExt>
        </Block>
        <FormContainer onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="Login">Login:</Label>
            <Input
              type="text"
              id="Login"
              name="Login"
              placeholder="Enter your Login"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Password">Password:</Label>
            <Input
              type="Password"
              id="Password"
              name="Password"
              placeholder="Enter your Password"
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </FormContainer>
      </Section>
      <Footer />
    </>
  );
};

export default Login;
