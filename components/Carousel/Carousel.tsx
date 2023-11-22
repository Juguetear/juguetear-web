"use client";

import { ArrowButton } from "components/ArrowButton/ArrowButton";
import React from "react";
import { A11y, Keyboard, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";

interface CarouselData {
  children: React.ReactNode;
  isFullWidth?: true;
}

const Carousel = ({ children, isFullWidth }: CarouselData) => {
  const childrenArray = React.Children.toArray(children);
  const breakpointsConfig: Record<number, SwiperOptions> = {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };

  // TODO: #373 Agregar margenes entre las slides del Carousel
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
          prevSlideMessage: "Pasar al slide anterior",
          nextSlideMessage: "Pasar al slide siguiente",
        }}
        keyboard
        breakpoints={isFullWidth ? undefined : breakpointsConfig}
        slidesPerView={1}
        spaceBetween={20}
        wrapperClass={isFullWidth && "aspect-video !w-[48rem]"}
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
