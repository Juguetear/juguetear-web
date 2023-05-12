"use client";
import React from "react";
import { Navigation } from "swiper";
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

  function onClick() {
    return;
  }

  return (
    <div className="flex items-center">
      <ArrowButton handleClick={onClick} />
      <Swiper
        modules={[Navigation]}
        direction="horizontal"
        navigation={{
          prevEl: "#custom-left-button",
          nextEl: "#custom-right-button",
        }}
        breakpoints={breakpointsConfig}
        slidesPerView={1}
      >
        {childrenArray.map((child, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {child}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ArrowButton direction="right" handleClick={onClick} />
    </div>
  );
};

export default Carousel;
