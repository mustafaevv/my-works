import React, { useEffect, useState } from "react";
import { getDocs, collection, doc } from "firebase/firestore";
import { Container } from "../Layout/Container";
import { db } from "../Fairbase.js/fairbase";
import styled from "styled-components";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";

const Box = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const H1 = styled.h1`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #000;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.06);
  }
`;

const CardImage = styled.img`
  width: 100%;
  /* height: 200px; */
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const CardTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  margin-bottom: 10px;
  font-weight: bold;
  color: #000;
`;

const CardInfo = styled.p`
  font-size: 16px;
  margin: 0;
  margin-bottom: 10px;
  font-weight: bold;
  color: #000;
`;

const Cars = () => {
  const [data, setDate] = useState([]);
  const cars = collection(db, "nissan-cars");

  useEffect(() => {
    const getDataFromFirebase = async () => {
      const data = await getDocs(cars);
      setDate(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDataFromFirebase();
  }, []);

  console.log(data);
  return (
    <section>
      <H1>All Cars</H1>
      <Box>
        {data.map((item, index) => (
          <CardContainer>
            <CardImage src={item.img} alt="" />
            <CardTitle>{item.name}</CardTitle>
            <CardInfo>{`Price: ${item.price} $`}</CardInfo>
          </CardContainer>
        ))}
      </Box>
    </section>
  );
};

export default Cars;
