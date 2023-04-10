"use client";
import Link from "next/link";
import styled from "styled-components";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "components/Button/Button";
import { IconCheckmark } from "components/IconCheckmark/IconCheckmark";

export interface CarouselSlideData {
  title: string;
  img?: string;
  isAvailable?: boolean;
  description?: string;
  btnText?: string;
  link?: string;
}

interface CarouselData {
  slides: CarouselSlideData[];
}

const StyledSwiper = styled(Swiper)`
  height: 467px;
  max-width: 1020px;

  .swiper-wrapper {
    max-width: 857px;

    .swiper-slide {
      width: 273px;
    }
  }
`;

const StyledSlide = styled.div`
  width: 273px;
  height: 467px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  gap: 16px;

  border-radius: 4px;
  padding: 24px;

  background-color: white;
`;

const StyledLink = styled(Link)`
  width: 100%;
`;

const ImageDiv = styled.div`
  width: 226px;
  height: 168px;

  border-radius: 4px;

  background-color: gray;
`;

const CarouselSlide = ({
  title,
  img,
  isAvailable,
  description,
  btnText = "PEDIR JUGUETE",
  link = "/",
}: CarouselSlideData) => {
  return (
    <StyledSlide>
      <div className="flex w-full flex-initial border-b border-solid border-gray py-3">
        <h4 className="font-outfit text-xl">{title}</h4>
      </div>

      <ImageDiv />

      <div className="font-outfit text-sm">
        {isAvailable ? (
          <div className="flex flex-row items-center font-outfit font-bold text-green">
            Disponible &nbsp; <IconCheckmark className="fill-green" />
          </div>
        ) : (
          <div className="flex flex-row items-center font-outfit font-bold text-green">
            No disponible
          </div>
        )}{" "}
      </div>

      <p className="font-outfit text-sm font-medium text-blue">{description}</p>

      <StyledLink href={link}>
        <Button appearance="button">{btnText}</Button>
      </StyledLink>
    </StyledSlide>
  );
};

const Carousel = ({ slides }: CarouselData) => {
  const breakpointsConfig = {
    1024: {
      slidesPerView: 3,
      spaceBetween: 19,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  };

  return (
    <StyledSwiper
      modules={[Navigation]}
      direction="horizontal"
      navigation
      breakpoints={breakpointsConfig}
      slidesOffsetAfter={34}
      slidesOffsetBefore={34}
      initialSlide={1}
      slidesPerView="auto"
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.title}>
            <CarouselSlide {...slide} />
          </SwiperSlide>
        );
      })}
    </StyledSwiper>
  );
};

export default Carousel;
