'use client'
import React from 'react';
import { useSwiper } from 'swiper/react';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

export const SwiperNavButtons = () => {
  const swiper = useSwiper(); // Access the Swiper instance

  return (
    <div className="swiper-nav-btns">
      {/* <button onClick={() => swiper.slidePrev()}>⮜</button>
      <button onClick={() => swiper.slideNext()}>⮞</button> */}
      <button onClick={() => swiper.slidePrev()}><FaChevronLeft className='swiperArrow'/></button>
      <button onClick={() => swiper.slideNext()}><FaChevronRight className='swiperArrow'/></button>
    </div>
  );
};

export default SwiperNavButtons;
