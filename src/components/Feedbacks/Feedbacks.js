import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import IMG_STAR from "../../assets/star.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Feedbacks.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Feedback({ props }) {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        grabCursor={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {props.map((item, index) => (
          <CustomSwiperSlide key={index}>
            <div className="div-1">
              <img src={item.img} alt=''></img>
              <p> {item.name} </p>
            </div>
            <div className="div-2">{item.content}</div>
            <div className="marks">
              {new Array(5).fill(0).map((item, index) => (
                <img src={IMG_STAR} key={index} alt=''></img>
              ))}
            </div>
          </CustomSwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
  position: relative;
  height: 100%;
  padding: 50px;
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  cursor: pointer;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 1px solid ${(p) => p.theme.borderColor1};
  border-radius: 10px;
  padding: 20px;
  position: relative;
  .div-1 {
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    img {
      width: 50px;
    }
    p {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .div-2 {
    margin-top: 20px;
    width: 90%;
    text-align: start;
    font-size: 17px;
  }
  .marks {
    position: absolute;
    bottom: 0;
    padding: 30px;
    width: 100%;

    display: flex;
    justify-content: flex-start;
    gap: 5px;
    img {
      width: 20px;
    }
  }
`;
