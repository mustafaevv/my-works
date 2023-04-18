import React from "react";
import styled from "styled-components";

const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`;

const Box = styled.div`
  width: 400px;
  margin: 0;
  height: 625px;
`;

const Img = styled.img`
  width: 100%;
`;

const ImgBox = styled.div`
  position: relative;
  width: 100%;
`;

const ImgName = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #120f0f;
  height: 30px;
  width: 100%;
  color: #fff;
`;

const H5 = styled.h5`
  font-size: 20px;
  font-weight: 400;
  color: #000;
  margin-top: 20px;
`

const Button = styled.button`
  width: 180px;
  height: 45px;
  border: 1px solid black;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 20px;
  margin-top: 30px;
  transition: 0.5s;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

const data = [
  {
    img: "https://www.nissanusa.com/content/dam/Nissan/us/homepage/2023/promos/certified/2022-rogue-steering-wheel.jpg",
    ImgName: "NISSAN CERTIFIED",
    name: "Search Pre-Owned Inventory",
  },
  {
    img: "https://www.nissanusa.com/content/dam/Nissan/us/homepage/2023/promos/armada/2023-nissan-armada-front-view.jpg",
    ImgName: "2023 NISSAN ARMADA®",
    name: "Intelligent 4x4 capability",
  },
  {
    img: "https://www.nissanusa.com/content/dam/Nissan/us/homepage/2023/promos/rogue/2023-nissan-rogue-compact-suv.jpg",
    ImgName: "2023 NISSAN ROGUE®",
    name: "#1 Ranked Compact SUV",
  },
];
const Gallery = () => {
  return (
    <div>
      <Block>
        {data.map((item) => (
          <Box>
            <ImgBox>
              <Img src={item.img} alt="" />
              <ImgName>
                <p>{item.ImgName}</p>
              </ImgName>
            </ImgBox>
            <H5>{item.name}</H5>
            <Button>Explore</Button>
          </Box>
        ))}
      </Block>
    </div>
  );
};

export default Gallery;
