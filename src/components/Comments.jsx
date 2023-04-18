import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import { Container } from "../Layout/Container";

import "swiper/css";

const Box = styled.div`
  position: relative;
  width: 50%;
  height: 500px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const User = styled.h6`
  font-size: 30px;
  font-weight: 500;
  color: #000;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 18px;
  color: #000;
  line-height: 1.5;
`;

const comments = [
  {
    name: "Max",
    text: "I recently purchased a Nissan Altima and I am so impressed with the performance and features. The car handles beautifully and the safety features give me peace of mind while driving. Overall, I am very happy with my purchase",
  },
  {
    name: "John",
    text: "I've been driving my Nissan Rogue for a few years now and it has been an excellent car. The gas mileage is great and the interior is spacious and comfortable. I also appreciate the advanced technology and the ease of use for features like the backup camera and touch screen display",
  },
  {
    name: "James",
    text: "I just upgraded to a Nissan Maxima and it has exceeded my expectations. The sleek design and powerful engine make for a fun and exciting driving experience. The premium interior and advanced safety features also make me feel like I am driving a luxury car.",
  },
  {
    name: "Robert",
    text: "I recently purchased a Nissan Leaf and I am blown away by the efficiency and eco-friendliness of this car. It has a long range and the electric motor provides a smooth and quiet ride. Plus, the low maintenance and operating costs make it a smart investment for the future.",
  },
];

const Comments = () => {
  return (
    <section>
      <Container>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {comments.map(({ name, text }, i) => (
            <SwiperSlide key={i}>
              <Box>
                <User>{name}</User>
                <Text>{text}</Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Comments;
