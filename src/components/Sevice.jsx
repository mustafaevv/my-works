import React from "react";

import { IoSettingsSharp } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";
import { MdLocalOffer } from "react-icons/md";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 100px 0;
`;

const Box = styled.div`
  width: 300px;
  height: 120px;
  padding: 10px 0;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: #c3002f;

    & p {
      color: #fff;
    }
  }
`;

const Icon = styled.p`
  font-size: 26px;
  color: black;
`;

const Text = styled.p`
  font-size: 18px;
  color: black;
`;

const data = [
  {
    icon: <IoSettingsSharp />,
    text: "Build Your Nissan",
  },
  {
    icon: <CgNotes />,
    text: "View a Brochure",
  },
  {
    icon: <MdLocalOffer />,
    text: "View a Offers",
  },
];

const Sevice = () => {
  return (
    <div>
      <Content>
        {data.map((item) => (
          <Box>
            <Icon>{item.icon}</Icon>
            <Text>{item.text}</Text>
          </Box>
        ))}
      </Content>
    </div>
  );
};

export default Sevice;
