"use client";
import React from "react";
import { Navigation, A11y, Keyboard } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowButton } from "components/ArrowButton/ArrowButton";

interface CarouselData {
  children: React.ReactNode;
}

const Carousel = ({ children }: CarouselData) => {
  const childrenArray = React.Children.toArray(children);
  const breakpointsConfig = {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  return (
    <div className="flex items-center">
      <ArrowButton />
      <Swiper
        modules={[Navigation, Keyboard, A11y]}
        direction="horizontal"
        navigation={{
          prevEl: "#custom-left-button",
          nextEl: "#custom-right-button",
        }}
        a11y={{
          enabled: true,
        }}
        keyboard
        breakpoints={breakpointsConfig}
        slidesPerView={1}
      >
        {childrenArray.map((child, index) => {
          return (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              {child}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ArrowButton direction="right" />
    </div>
  );
};

export default Carousel;
