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
      <div className="flex max-w-screen-xl flex-col lg:ml-auto lg:flex-row lg:items-center">
        <div className="mb-14 mr-2 lg:w-6/12">
          <h1 className="max-w-4xl text-blue">{title}</h1>
          <p className="my-4 mb-9 font-inter text-xl font-medium text-blue">
            {subTitle}
          </p>
          <Button appearance="button">Ver juguetes</Button>
        </div>
        <Image
          src={image.src}
          width="750"
          height="478"
          className="relative w-full lg:left-36 lg:w-8/12 lg:rounded-[56px] xl:left-32 xl:w-full"
          alt={image.alt}
        />
      </div>
    </section>
  );
};
