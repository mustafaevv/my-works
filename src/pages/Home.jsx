import React from "react";
import Header from "../components/Header";
import Comments from "../components/Comments";

import Box from "../components/NissanCarTabs";
import Footer from "../components/Footer";
import Form from "../components/Form";
import NissanCarTabs from "../components/NissanCarTabs";
import Cars from "../components/Cars";
import Gallery from "../components/Gallery";
import Sevice from "../components/Sevice";

const Home = () => {
  return (
    <>
      <Header />
      <Cars/>
      <Sevice/>
      <Gallery/>
      <Form/>
      <Comments />
      <Footer/>
    </>
  );
};

export default Home;
