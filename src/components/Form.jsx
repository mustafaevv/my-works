import React from 'react';
import styled from 'styled-components';

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
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit logic here
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" name="name" placeholder="Enter your name" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" placeholder="Enter your email" />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </FormContainer>
  );
};

export default Form;
