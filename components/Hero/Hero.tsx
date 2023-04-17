import React from "react";
import { Button } from "../Button/Button";
import Image from "next/image";

export interface HeroProps extends React.HTMLProps<HTMLElement> {
  title: string;
  subTitle: string;
  image: {
    src: string;
    alt: string;
  };
}

export const Hero = ({ title, subTitle, image }: HeroProps) => {
  return (
    <section className="relative py-10">
      <div className="flex max-w-screen-xl flex-col overflow-hidden lg:mx-auto lg:flex-row lg:items-center">
        <div className="mb-14 lg:mb-0 lg:w-5/12">
          <h1 className="mb-1 max-w-4xl text-blue md:mb-5">{title}</h1>
          <p className="mb-8 font-inter text-base font-medium text-blue md:mb-9 md:text-xl">
            {subTitle}
          </p>
          <Button appearance="button">Ver juguetes</Button>
        </div>
        <Image
          src={image.src}
          width="750"
          height="478"
          className="relative w-full object-center lg:left-36 lg:w-8/12 lg:rounded-l-[56px] xl:left-40 xl:w-full"
          alt={image.alt}
        />
      </div>
    </section>
  );
};
