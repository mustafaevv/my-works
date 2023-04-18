import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  text-align: justify;
`;

const About = () => {
  return (
    <>
      <Header />
      <AboutContainer>
        <AboutTitle>About Nissan</AboutTitle>
        <AboutText>
          Nissan is a Japanese multinational automobile manufacturer that
          produces a wide range of vehicles, including electric cars, commercial
          vehicles, and luxury sports cars. The company was founded in 1933 and
          has since become one of the largest automakers in the world.
        </AboutText>
        <AboutText>
          Nissan has a strong commitment to innovation, sustainability, and
          safety. The company is dedicated to developing cutting-edge technology
          that enhances the driving experience and reduces environmental impact.
          Nissan also has a strong focus on safety, with advanced safety
          features incorporated into many of its vehicles.
        </AboutText>
        <AboutText>
          With a rich history and a commitment to excellence, Nissan continues
          to be a leader in the automotive industry.
        </AboutText>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;
